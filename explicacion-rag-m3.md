# 🧠 Conexión de Corpus Normativo (RAG) — Hito M3

> **Proyecto:** SASify Colombia — Asistente Legal de Constitución de S.A.S.  
> **Materia:** Derecho e Inteligencia Artificial (2026-II)  
> **Institución:** Pontificia Universidad Javeriana  
> **Estudiante:** Isabella Medina Ospina · **Docente:** Pedro Ardila  

---

## 📖 ¿Qué es RAG y por qué es fundamental en Derecho?

**RAG** significa *Retrieval-Augmented Generation* (Generación Aumentada por Recuperación).

En el ejercicio profesional del derecho, un abogado **no responde de memoria ni inventa artículos**: acude al texto positivo de la norma, busca el artículo pertinente, lo lee, y formula su concepto jurídico con base en el texto legal vigente.

Un modelo de inteligencia artificial estándar (sin RAG) responde únicamente con base en lo que "recuerda" de su entrenamiento. En derecho colombiano, esto suele generar **alucinaciones jurídicas**:
- Confusión de leyes colombianas con normas de España, México o Argentina.
- Invención de números de artículos o decretos derogados.
- Aplicación de normas generales del Código de Comercio donde prima la norma especial de la Ley 1258 de 2008.

Con **RAG**, el modelo está obligado a consultar primero la carpeta `/corpus` antes de responder.

---

## 🏛️ Estructura del Corpus Normativo Cargado

El corpus se encuentra en la carpeta `/corpus` y está conformado por normas públicas oficiales de Colombia:

| Archivo | Contenido Normativo | Relevancia Jurídica en SASify |
| :--- | :--- | :--- |
| **`corpus/ley_1258_2008_sas.txt`** | Ley 1258 de 2008 completa (Arts. 1 a 46). | Es la fuente primaria y obligatoria: regula requisitos del documento de constitución (Art. 5), reglas de capital (Art. 9), junta directiva opcional (Art. 25), representante legal (Art. 26) y revisor fiscal (Art. 28). |
| **`corpus/codigo_comercio_supletorio.txt`** | Extracto del Libro Segundo del Decreto 410 de 1971. | Aplica de forma supletoria en lo no previsto por la Ley 1258 de 2008 (conforme al Art. 45 de la ley especial). |
| **`corpus/decreto_1074_2015_registro.txt`** | Decreto Único Reglamentario del Sector Comercio. | Regula las formalidades de radicación y control formal de homonimia y matrícula mercantil ante Cámaras de Comercio. |

---

## ⚙️ Arquitectura Técnica del RAG en SASify Colombia

El flujo de procesamiento sigue 4 etapas estrictas:

```
[Usuario pregunta]
        ↓
1. Recuperador (Retriever) busca coincidencias semánticas en /corpus/
        ↓
2. Filtro de Relevancia: Extrae los artículos exactos (ej. Art. 5, Art. 28)
        ↓
3. Inyección de Contexto: Arma el Prompt enriquecido con el texto de la norma
        ↓
4. Generador (LLM / Motor local): Redacta la respuesta CITANDO expresamente el artículo
```

---

## 🛡️ Salvaguarda Anti-Alucinaciones

1. **Obligación de Cita:** Ninguna afirmación legal puede emitirse sin su etiqueta de cita normativa positiva (ejemplo: `Art. 5 Num. 5 Ley 1258/08`).
2. **Reconocimiento de Ausencia de Fuente:** Si el corpus no contiene la norma aplicable o si se indaga sobre materias vetadas (impuestos, marcas, laboral litigioso), el sistema declara expresamente:
   > *"No cuento con la base normativa para responder con certeza sobre ese punto. Te sugiero consultarlo con un abogado titulado."*
