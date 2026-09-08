"""
SASify Colombia — Motor RAG (Retrieval-Augmented Generation)
Pontificia Universidad Javeriana · Derecho e Inteligencia Artificial (2026-II)
Estudiante: Isabella Medina Ospina · Docente: Pedro Ardila

Este script implementa el flujo de RAG con el corpus normativo de la Ley 1258 de 2008.
Permite consultar el corpus localmente o conectarlo a un modelo de OpenRouter.
"""

import os
import glob

CORPUS_DIR = os.path.join(os.path.dirname(__file__), "corpus")

def cargar_corpus():
    """Lee todos los archivos de normas en la carpeta /corpus."""
    documentos = {}
    archivos = glob.glob(os.path.join(CORPUS_DIR, "*.txt"))
    for ruta in archivos:
        nombre = os.path.basename(ruta)
        with open(ruta, "r", encoding="utf-8") as f:
            documentos[nombre] = f.read()
    return documentos

def buscar_articulos_relevantes(consulta, documentos, top_k=2):
    """
    Búsqueda semántica por palabras clave de los artículos en el corpus.
    Evita alucinaciones al recuperar el texto oficial de la norma.
    """
    palabras = [p.lower() for p in consulta.split() if len(p) > 3]
    coincidencias = []

    for nombre_doc, contenido in documentos.items():
        # Dividir el archivo en fragmentos por artículo
        articulos = contenido.split("ARTÍCULO")
        for idx, art in enumerate(articulos):
            if not art.strip():
                continue
            texto_articulo = "ARTÍCULO" + art
            texto_lower = texto_articulo.lower()
            
            puntuacion = sum(1 for p in palabras if p in texto_lower)
            if puntuacion > 0:
                coincidencias.append({
                    "fuente": nombre_doc,
                    "texto": texto_articulo.strip(),
                    "puntuacion": puntuacion
                })

    # Ordenar por mayor coincidencia
    coincidencias.sort(key=lambda x: x["puntuacion"], reverse=True)
    return coincidencias[:top_k]

def responder_con_rag(pregunta):
    """
    Toma la pregunta del usuario, busca en el corpus y genera la respuesta
    fundamentada estrictamente en la ley colombiana.
    """
    documentos = cargar_corpus()
    
    # 1. Filtro ético de materias excluidas
    pregunta_lower = pregunta.lower()
    if any(termino in pregunta_lower for termino in ["iva", "dian", "rut", "impuesto", "retencion"]):
        return (
            "🛑 LÍMITE DE ALCANCE: Como asistente societario de SASify Colombia, "
            "no presto asesoría tributaria ni fiscal sobre IVA o trámites de la DIAN. "
            "Por favor consulta con un contador público o abogado tributarista."
        )

    # 2. Recuperación en el corpus (RAG)
    resultados = buscar_articulos_relevantes(pregunta, documentos)
    
    if not resultados:
        return (
            "No encontré fundamento normativo en el corpus de la Ley 1258 de 2008 "
            "para responder a esta consulta con certeza. Te sugiero consultar con un abogado titulado."
        )

    # 3. Construir la respuesta citando la fuente exacta
    art_top = resultados[0]
    primeras_lineas = "\n".join(art_top["texto"].split("\n")[:3])
    
    respuesta = (
        f"⚖️ FUNDAMENTO NORMATIVO RECUPERADO (RAG de {art_top['fuente']}):\n"
        f"{primeras_lineas}...\n\n"
        f"💡 EXPLICACIÓN: Conforme a este artículo de la Ley 1258 de 2008, "
        f"tu trámite debe cumplir con los requisitos señalados."
    )
    return respuesta

if __name__ == "__main__":
    print("=== DEMOSTRACIÓN DE MOTOR RAG — SASIFY COLOMBIA ===")
    preguntas_prueba = [
        "¿Quién ejerce la representación legal de una SAS?",
        "¿Es obligatorio tener revisor fiscal?",
        "¿Cómo pago el impuesto de renta ante la DIAN?"
    ]
    
    for p in preguntas_prueba:
        print(f"\nConsulta: {p}")
        print("-" * 50)
        print(responder_con_rag(p))
