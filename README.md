# ⚖️🤖 Proyecto Final — Derecho e Inteligencia Artificial

**Pontificia Universidad Javeriana · 2026-II · Docente: Pedro Ardila**

> **Estudiante:** Isabella Medina Ospina 
> **Nombre del proyecto:** SASify Colombia
> **Fecha de inicio:** 2026-08-21

---

Bienvenido/a a tu repositorio de proyecto. **Este archivo es tu tablero de mando**: aquí describes tu proyecto, planificas su desarrollo y dejas evidencia del avance. Lo vas a completar por partes, siguiendo el curso.

📌 Si ya habías escrito una descripción de tu proyecto cuando creaste el repo, la encuentras intacta en `README-ORIGINAL.md`. Úsala como punto de partida para la Parte 1 — no empieces de cero.

**No necesitas saber programar.** Todo el código lo construirás con asistencia de IA (*vibe coding*). Tu valor como estudiante de derecho está en el problema que eliges, las fuentes que alimentas, las instrucciones que diseñas y el juicio crítico con el que evalúas el resultado.

---

## 📋 Parte 1 — Descripción del proyecto

> Completa cada sección con 3–10 frases. Sé concreto/a: esta descripción es la que tu IA usará como contexto y la que el docente usará para realimentarte.

### 1.1 El problema jurídico
¿Qué problema **real del derecho colombiano** resuelve tu herramienta? ¿Quién lo sufre hoy y cómo lo resuelve sin tu herramienta?
En Colombia, constituir una Sociedad por Acciones Simplificada (SAS) requiere redactar un documento de constitución (estatutos) que cumpla los requisitos mínimos del artículo 5 de la Ley 1258 de 2008. Aunque la SAS fue diseñada para simplificar la creación de empresas, muchos emprendedores de primera vez no saben qué cláusulas incluir (objeto social, capital autorizado/suscrito/pagado, órganos de administración, causales de disolución, restricciones a la negociación de acciones, etc.). Hoy resuelven esto de tres formas imperfectas: (1) pagan honorarios de un abogado o una notaría para unos estatutos estándar, (2) descargan plantillas genéricas de internet que no citan la norma ni se ajustan a su caso concreto, o (3) usan el formulario simplificado de Cámara de Comercio sin entender qué están firmando. Esto genera errores comunes: capital mal estructurado, omisión de cláusulas de protección entre socios, o desconocimiento de que la SAS no exige revisor fiscal ni junta directiva obligatoria.
### 1.2 Usuarios
¿Quién va a usarla? Describe a tu usuario ideal en una frase (ej. *"un arrendatario bogotano que le subieron el canon de arrendamiento más del límite legal"*). Recuerda que al final necesitas **al menos un usuario real** que la pruebe.
Usuario ideal: un emprendedor bogotano de una startup en etapa temprana (1 a 3 socios) que quiere constituir su SAS entendiendo cada cláusula de sus estatutos, sin pagar de entrada honorarios de abogado para un borrador inicial. Usuario real de prueba: un compañero, familiar o conocido que esté evaluando montar un negocio propio y pueda simular el proceso con datos ficticios.
### 1.3 Qué hace y qué NO hace (alcance)
| ✅ Sí hace | ❌ No hace |
|Explica en lenguaje simple qué significa cada cláusula y por qué es obligatoria u opcional |No reemplaza la revisión final de un abogado o la firma ante notario cuando la ley la exija (ej. aportes en especie con inmuebles) |
| Genera un borrador de estatutos de constitución de SAS a partir de un cuestionario guiado (nombre, domicilio, objeto social, capital, accionistas, representante legal, causales de disolución] | Explica en lenguaje simple qué significa cada cláusula y por qué es obligatoria u opcional] |
|Cita el artículo específico de la Ley 1258 de 2008 que sustenta cada sección del borrador  | No asesora sobre régimen tributario (RUT, responsabilidad de IVA, retención) ni sobre registro de marca |

*Consejo de abogado: un alcance pequeño y perfecto vale más que uno grande y roto.*

### 1.4 Marco jurídico y fuentes
¿Qué normas alimentan tu herramienta? Lista tu corpus normativo (leyes, decretos, sentencias — debe ser **pequeño y público**):
- [ ] Norma/sentencia 1: [nombre + enlace]
- [ ] Norma/sentencia 2: [nombre + enlace]
☐ Ley 1258 de 2008 (crea la SAS): http://www.secretariasenado.gov.co/senado/basedoc/ley_1258_2008.html
☐ Ley 1258 de 2008, texto consolidado con notas de vigencia — Función Pública: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34130
☐ Código de Comercio (Decreto 410 de 1971), Libro Segundo — normas supletorias en lo no regulado por la Ley 1258: http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html
☐ Decreto Único Reglamentario 1074 de 2015, Sector Comercio — trámite de registro mercantil: https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77942

### 1.5 Nombre y lema
Un nombre corto para tu herramienta y una frase que explique qué hace (la usarás en la demo del día de presentaciones).
SASify Colombia — "Constituye tu SAS con estatutos claros, citando la ley y en minutos."
---

## 🗺️ Parte 2 — Plan de desarrollo

Marca cada hito cuando lo termines. Los hitos siguen las sesiones del curso.

- [ ] **M0 — Descripción y plan** *(con Sesión 1)*: Partes 1 y 2 de este README completas.
- [ ] **M1 — Asistente con instrucciones v1** *(Sesión 1–2)*: redactaste las instrucciones (prompt de sistema) de tu asistente y funcionan en una herramienta gratuita de chat.
- [ ] **M2 — Casos de prueba documentados** *(Sesión 2)*: tienes al menos 5 casos de prueba (donde antes fallaba) con resultados guardados en `docs/casos-de-prueba.md`.
- [ ] **M3 — Corpus conectado (RAG)** *(Sesión 3)*: tu asistente **cita la fuente** normativa que usa y no inventa. Corpus cargado en `corpus/`.
- [ ] **M4 — Interfaz web desplegada** *(Sesión 4)*: tu herramienta tiene **URL pública** (ver Parte 4) y tu primer usuario real la probó con evidencia.
- [ ] **M5 — Análisis crítico y demo** *(Sesión 5)*: Parte 7 completada + presentación de 5 minutos.

### Bitácora de avance semanal
| Semana | Qué hice | Enlace/captura | Dudas para la clase |
| --- | --- | --- | --- |
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

---

## 🛠️ Parte 3 — Stack técnico recomendado

Todo es **gratuito y no exige tarjeta de crédito**. Tu proyecto final debería verse así:

```
[Usuario] → [Interfaz web] → [Orquestación (LangChain)] → [Modelo (OpenRouter)]
                                   ↕
                          [Tu corpus normativo (RAG)]
```

| Pieza | Herramienta recomendada | Para qué sirve (en cristiano) |
| --- | --- | --- |
| **Interfaz web** | **v0.dev** (genera una app Next.js) o **Streamlit** (si tu agente trabaja en Python) | Lo que el usuario ve: cajas de texto, botones. Se la describes a la IA y ella la construye. |
| **Orquestación** | **LangChain / LangGraph** | El "cerebro intermedio": toma la pregunta del usuario, busca en tus normas, arma el prompt y llama al modelo. |
| **Modelo (LLM)** | **OpenRouter** — modelos con etiqueta `:free` | El "cerebro" que redacta. OpenRouter te da acceso a modelos gratuitos con una sola cuenta y una sola API key. |
| **Memoria de fuentes (RAG)** | LangChain + almacén de vectores (**Chroma** o **FAISS** en local; **Supabase** si necesitas base de datos en la nube) | La técnica para que el modelo responda **con tus normas** y no con lo que "recuerda" (que puede ser una alucinación jurídica). |
| **Trazabilidad** *(opcional)* | **LangSmith** (plan gratuito) | Ver qué le pasó a cada respuesta por dentro. Útil para depurar. |

> 🔑 **Regla de oro:** tu `OPENROUTER_API_KEY` va en una **variable de entorno**, jamás pegada en el código ni en el chat. Si una clave se filtra en GitHub, revócala de inmediato en openrouter.ai → Keys.

Pídele a tu agente de IA que te explique esta arquitectura con tu proyecto concreto antes de escribir una línea de código.

---

## 🚀 Parte 4 — Ruta de despliegue

Tu meta: **una URL pública** que cualquiera pueda abrir. Elige una ruta:

### Opción A — Vercel ⭐ (recomendada, la del curso)
1. Sube tu código a este repo de GitHub (ya lo tienes ✅).
2. Crea cuenta gratis en [vercel.com](https://vercel.com) con tu GitHub.
3. "Add New Project" → importa tu repo → Deploy.
4. Cada `git push` re-despliega solo.
- ✅ Ideal para Next.js/Streamlit (Streamlit via [streamlit.io/community-cloud](https://streamlit.io)) · gratis · sin servidor.

### Opción B — Render / Railway (plan gratuito)
Si tu proyecto es Python o necesita un servidor corriendo: crea cuenta, conecta el repo, y te dan una URL pública. Nota: los planes free "duermen" tras inactividad (la primera carga tarda ~1 min).

### Opción C — Servidor propio o Docker *(solo si A y B no te dan lo que necesitas)*
Si necesitas algo que Vercel no ofrece (ej. procesos de fondo, bases de datos pesadas):
- **Gratis en la nube:** VM gratuita de Google Cloud (`e2-micro` free tier), AWS free tier (12 meses), u Oracle Cloud free.
- **Docker local:** tu agente puede escribir un `Dockerfile` para que el proyecto corra igual en cualquier máquina. Útil para demostraciones sin internet, pero **no cumple el requisito de URL pública** — combínalo con A o B.

### Checklist de despliegue ✅
- [ ] URL pública funciona en el navegador de otra persona (pídele a alguien que la abra)
- [ ] La advertencia de la Parte 7 es **visible** en la interfaz
- [ ] No hay API keys ni secretos en el código (verifica con una búsqueda de `sk-` en el repo)
- [ ] Anota la URL aquí: **`[tu-url-publica]`**

> El dominio propio (.com, .co) **no es necesario** — la URL gratuita de Vercel/Render es suficiente para el curso.

---

## 🧠 Parte 5 — Guía de prompting para *vibe coding*

Tu competencia más transferible a la práctica profesional: **instruir bien a la IA**. Reglas:

1. **Un hito a la vez.** No le pidas "hazme todo el proyecto". Pide: "vamos por M1".
2. **Da contexto jurídico, recibe código.** Pega tu Parte 1 y dile: "eres mi ingeniero, yo soy el abogado del proyecto".
3. **Pide explicaciones.** "Explícame como a alguien que no sabe programar qué acabas de hacer."
4. **Commits frecuentes.** Cada vez que algo funcione: `git add . && git commit -m "M1: instrucciones del asistente"` y push. Si rompes algo, siempre puedes volver atrás.
5. **Nunca pegues datos personales reales** de usuarios en el chat ni en el código (Ley 1581).
6. **Verifica como abogado.** Toda respuesta legal que dé la herramienta, contrástala con la norma. Tú respondes por lo que publicas.

### Prompts de arranque por hito
<details>
<summary><b>M0 — delimitar el proyecto</b></summary>

> "Soy estudiante de derecho primer semestre. Mi idea de proyecto es [idea]. Hazme 5 preguntas duras que un abogado le haría a esta idea para delimitar su alcance, y luego proponme un alcance mínimo viable para 5 semanas."
</details>

<details>
<summary><b>M1 — instrucciones del asistente</b></summary>

> "Escribe el prompt de sistema de mi asistente jurídico. Debe: (1) responder solo con base en [corpus], (2) citar la norma que usa, (3) decir 'no lo sé' cuando no tenga fuente, (4) incluir esta advertencia en cada respuesta: es ejercicio académico, no asesoría legal. Proponme 3 versiones y explícame las diferencias."
</details>

<details>
<summary><b>M3 — RAG con mis normas</b></summary>

> "Tengo [ley X] en archivos de texto en /corpus. Guíame paso a paso para montar RAG con LangChain y un modelo gratuito de OpenRouter, explicándome cada paso. Al final, el asistente debe citar artículo y norma en cada respuesta."
</details>

<details>
<summary><b>M4 — interfaz y despliegue</b></summary>

> "Crea una interfaz web simple para mi asistente: un recuadro para escribir la consulta, el espacio de respuesta, la advertencia legal visible arriba, y el logo/nombre. Luego guíame para desplegarla gratis en Vercel con mi repo de GitHub. No sé programar: dime exactamente qué archivo tocar y qué copiar."
</details>

---

## ⚖️ Parte 6 — Ética, datos y responsabilidad

Estas salvaguardas son **obligatorias** y hacen parte de la evaluación:

- **Advertencia visible obligatoria.** Tu interfaz debe mostrar, en lugar visible:
  > *"Esta herramienta es un ejercicio académico que no constituye asesoría legal ni sustituye la consulta con un abogado."*
  - [ ] Implementada y visible en la interfaz
- **Protección de datos (Ley 1581 de 2012).** Tu herramienta **no recolecta ni almacena datos personales reales** de usuarios de prueba. Los usuarios de prueba usan situaciones ficticias o datos inventados.
  - [ ] Verificado: no guardo datos personales
- **Corpus público.** Solo fuentes públicas: leyes, decretos, jurisprudencia publicada.
  - [ ] Verificado
- **Anti-alucinaciones.** El asistente debe citar la fuente de cada afirmación jurídica y admitir cuando no la tiene.
  - [ ] Casos de prueba donde la herramienta se niega a inventar

---

## 🔍 Parte 7 — Análisis crítico (insumo de tu sustentación final)

Responde con total honestidad — aquí es donde demuestras tu criterio jurídico:

1. **¿Dónde falla tu herramienta?** Describe 2 situaciones donde se equivoca o se queda corta.
2. **¿Qué datos procesa?** Qué entra, qué se guarda, qué sale.
3. **¿Por qué no reemplaza al abogado?** Argumenta en 5–8 frases.

---

## ✅ Parte 8 — Entregables finales (Definition of Done)

Requisitos de entrega del curso — todos deben estar ✅:

- [ ] 🔗 **Solución funcionando**: resuelve el problema jurídico y está desplegada con URL pública.
- [ ] 👤 **Usuario real**: al menos una persona externa al curso la usó, con evidencia (video corto o testimonio). Guarda la evidencia en `docs/evidencia-usuario.md`.
- [ ] 📦 **Repositorio con historial**: este repo muestra tus avances semanales (commits + bitácora).
- [ ] 🧠 **Análisis crítico**: Parte 7 completada.
- [ ] 📋 Partes 1–7 de este README completas y al día.

---

*Construido con asistencia de IA — como se enseña en este curso.* 🧑‍⚖️🤖
