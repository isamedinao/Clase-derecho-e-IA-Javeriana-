/**
 * SASify Colombia — Lógica del Asistente y Generador en Vivo
 * Pontificia Universidad Javeriana · 2026-II
 * Marco: Ley 1258 de 2008 (Sociedades por Acciones Simplificadas)
 */

document.addEventListener('DOMContentLoaded', () => {
  const chatMessages = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');
  const docPreview = document.getElementById('document-preview');
  const btnCopy = document.getElementById('btn-copy');
  const btnDownload = document.getElementById('btn-download');
  const btnReset = document.getElementById('btn-reset');
  const chips = document.querySelectorAll('.chip');

  // Estado del flujo conversacional
  let state = {
    step: 1,
    name: 'EJEMPLO S.A.S.',
    city: 'Bogotá D.C.',
    partners: ['Socio Fundador 1', 'Socio Fundador 2'],
    purpose: 'Cualquier actividad comercial o civil lícita (Objeto Indeterminado, Art. 5 num. 5 Ley 1258/08)',
    authorizedCapital: 20000000,
    subscribedCapital: 10000000,
    paidCapital: 10000000,
    shareValue: 1000,
    legalRep: 'Por definir',
    hasBoard: false,
    hasAuditor: false,
    completed: false
  };

  // Inicializar conversación
  initChat();

  function initChat() {
    chatMessages.innerHTML = '';
    state.step = 1;
    state.completed = false;

    appendBotMessage(`
      <p><strong>⚖️ ¡Bienvenida/o a SASify Colombia!</strong></p>
      <p>Soy tu asistente jurídico académico para la redacción de los estatutos de tu <strong>Sociedad por Acciones Simplificada (S.A.S.)</strong> conforme al <strong>artículo 5 de la Ley 1258 de 2008</strong>.</p>
      <div class="citation-tag">Art. 5 Ley 1258 de 2008 — Requisitos del documento de constitución</div>
      <br>
      <p>📌 <em>Recuerda que por protección de datos (Ley 1581 de 2012) debes usar nombres y datos ficticios para esta simulación.</em></p>
      <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed #cbd5e1;">
      <p><strong>Paso 1 de 5:</strong> ¿Qué <strong>nombre</strong> tendrá tu sociedad y en qué <strong>ciudad</strong> de Colombia fijarán su domicilio principal?<br><small>(Ejemplo: <em>Innovaciones Andinas S.A.S. en Bogotá</em>)</small></p>
    `);

    updateDocumentPreview();
  }

  // Manejar envío del formulario
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    userInput.value = '';

    // Simular tiempo de respuesta
    setTimeout(() => {
      processUserInput(text);
    }, 450);
  });

  // Chips de sugerencia rápida
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-text');
      userInput.value = text;
      chatForm.dispatchEvent(new Event('submit'));
    });
  });

  // Botón Reiniciar
  btnReset.addEventListener('click', () => {
    if (confirm('¿Deseas reiniciar la simulación?')) {
      initChat();
    }
  });

  // Procesar entrada según el paso y verificar límites éticos
  function processUserInput(input) {
    const lower = input.toLowerCase();

    // 1. REGLA ÉTICA: Límite de alcance tributario (DIAN, IVA, RUT, Impuestos)
    if (lower.includes('iva') || lower.includes('dian') || lower.includes('rut') || lower.includes('impuesto') || lower.includes('tributari') || lower.includes('retenci')) {
      appendBotMessage(`
        <p>🛑 <strong>Límite de Alcance (Salvaguarda Ética):</strong></p>
        <p>Como asistente jurídico especializado en derecho societario y Ley 1258 de 2008, <strong>no tengo autorización para emitir conceptos tributarios ni contables</strong> (relacionados con IVA, responsabilidades del RUT o declaraciones ante la DIAN).</p>
        <p>Cada empresa tiene particularidades fiscales que deben ser asesoradas directamente por un <strong>contador público titulado</strong> o un <strong>abogado tributarista</strong>.</p>
        <div class="citation-tag">Salvaguarda: Anti-alucinación y delimitación estricta de alcance</div>
        <br>
        <p>Continuemos con la redacción de los estatutos constitutivos:</p>
      `);
      askCurrentStep();
      return;
    }

    // 2. REGLA ÉTICA: Límite de marcas (SIC)
    if (lower.includes('marca') || lower.includes('sic') || lower.includes('patente') || lower.includes('propiedad industrial')) {
      appendBotMessage(`
        <p>🛑 <strong>Aclaración Importante sobre Registro de Marca:</strong></p>
        <p>Registrar el nombre de tu S.A.S. en la Cámara de Comercio <strong>no protege tu marca comercial</strong>. El registro de marca es un trámite totalmente independiente que se realiza ante la Superintendencia de Industria y Comercio (SIC).</p>
        <div class="citation-tag">Decisión 486 de la Comunidad Andina / Régimen de Propiedad Industrial</div>
        <br>
        <p>Continuemos estructurando tus estatutos:</p>
      `);
      askCurrentStep();
      return;
    }

    // Flujo normal por pasos
    switch (state.step) {
      case 1:
        // Nombre y domicilio
        state.name = input.toUpperCase().includes('S.A.S') ? input : input + ' S.A.S.';
        state.city = extractCity(input) || 'Bogotá D.C.';
        state.step = 2;

        appendBotMessage(`
          <p>✅ Excelente. Registrado: <strong>${state.name}</strong> con domicilio en <strong>${state.city}</strong>.</p>
          <div class="citation-tag">Art. 5 Num. 2 y 3 Ley 1258 de 2008</div>
          <br>
          <p><strong>Paso 2 de 5: Accionistas Fundadores.</strong></p>
          <p>La SAS permite ser constituida por <strong>una sola persona</strong> o por varios socios. ¿Quiénes serán los accionistas iniciales? (Indica nombres ficticios o número de socios).</p>
        `);
        updateDocumentPreview();
        break;

      case 2:
        // Socios
        state.partners = parsePartners(input);
        state.step = 3;

        appendBotMessage(`
          <p>✅ Accionistas registrados: <strong>${state.partners.join(', ')}</strong>.</p>
          <div class="citation-tag">Art. 5 Num. 1 Ley 1258 de 2008</div>
          <br>
          <p><strong>Paso 3 de 5: Objeto Social.</strong></p>
          <p>¿A qué actividades comerciales se dedicará la sociedad?</p>
          <p>💡 <em>Tip legal (Art. 5 Num. 5):</em> La Ley 1258 permite pactar un <strong>objeto social indeterminado</strong> ("cualquier actividad comercial o civil lícita"), lo que evita tener que reformar estatutos si la empresa cambia de línea de negocio. ¿Deseas objeto indeterminado o una actividad específica?</p>
        `);
        updateDocumentPreview();
        break;

      case 3:
        // Objeto social
        if (lower.includes('indeterminado') || lower.includes('cualquier') || lower.includes('licita') || lower.includes('si')) {
          state.purpose = 'La sociedad podrá realizar cualquier actividad comercial o civil lícita (Objeto social indeterminado conforme al Art. 5 num. 5 de la Ley 1258 de 2008).';
        } else {
          state.purpose = input + '. Además, podrá realizar cualquier actividad civil o comercial lícita conexa.';
        }
        state.step = 4;

        appendBotMessage(`
          <p>✅ Objeto social estructurado conforme a la ley.</p>
          <div class="citation-tag">Art. 5 Num. 5 Ley 1258 de 2008</div>
          <br>
          <p><strong>Paso 4 de 5: Capital y Acciones.</strong></p>
          <p>Bajo el <strong>artículo 9 de la Ley 1258 de 2008</strong>, el capital se divide en tres conceptos:</p>
          <ul>
            <li><strong>Capital Autorizado:</strong> Monto máximo proyectado.</li>
            <li><strong>Capital Suscrito:</strong> Acciones que los socios se comprometen a adquirir.</li>
            <li><strong>Capital Pagado:</strong> Lo efectivamente desembolsado hoy (la ley otorga hasta 2 años para pagarlo).</li>
          </ul>
          <p>¿Con qué monto estimado de capital suscrito desean iniciar? (Ej: <em>10 millones de pesos</em>).</p>
        `);
        updateDocumentPreview();
        break;

      case 4:
        // Capital
        const amount = extractAmount(input);
        state.subscribedCapital = amount;
        state.authorizedCapital = amount * 2;
        state.paidCapital = amount;
        state.step = 5;

        appendBotMessage(`
          <p>✅ Capital registrado: <strong>$${state.subscribedCapital.toLocaleString('es-CO')} COP</strong> dividido en acciones ordinarias de valor nominal $1.000 COP cada una.</p>
          <div class="citation-tag">Artículos 9, 10 y 11 Ley 1258 de 2008</div>
          <br>
          <p><strong>Paso 5 de 5: Representación Legal y Órganos Sociales.</strong></p>
          <p>1. ¿Quién ejercerá la <strong>Representación Legal</strong> de la sociedad?<br>
          2. Ten en cuenta que la S.A.S. <strong>NO está obligada</strong> a constituir Junta Directiva (Art. 25) ni a nombrar Revisor Fiscal (Art. 28) si sus activos son inferiores a 5.000 salarios mínimos. ¿Deseas prescindir de ellos para hacer la gestión más ágil?</p>
        `);
        updateDocumentPreview();
        break;

      case 5:
        // Representante legal y confirmación
        state.legalRep = input.split('.')[0].replace(/yo seré|será|el representante es/gi, '').trim() || state.partners[0];
        state.hasBoard = lower.includes('con junta') || lower.includes('si quiero junta');
        state.hasAuditor = lower.includes('con revisor') || lower.includes('si quiero revisor');
        state.step = 6;
        state.completed = true;

        appendBotMessage(`
          <p>🎉 <strong>¡Felicitaciones! Hemos completado todos los requisitos obligatorios del artículo 5 de la Ley 1258 de 2008.</strong></p>
          <p>El borrador completo de los estatutos de <strong>${state.name}</strong> ha sido redactado y ya está listo en el panel derecho.</p>
          <div class="citation-tag">Ley 1258 de 2008 · Art. 5, 9, 17, 25, 26, 28 y concordantes</div>
          <br>
          <p>👉 Puedes <strong>Copiar</strong> el texto o pulsar <strong>Descargar</strong> para guardarlo en tu computador.</p>
          <p>⚠️ <em>Recuerda: Este documento debe ser autenticado e inscrito en la Cámara de Comercio de tu ciudad para obtener la personería jurídica.</em></p>
        `);
        updateDocumentPreview();
        break;

      default:
        appendBotMessage(`
          <p>Los estatutos ya se encuentran generados en el panel derecho. Si deseas ajustar algún dato específico (nombre, capital, representante), escribe tu indicación o pulsa el botón <strong>🔄 Reiniciar</strong> para iniciar un nuevo documento.</p>
        `);
        break;
    }
  }

  function askCurrentStep() {
    switch (state.step) {
      case 1:
        appendBotMessage(`<p>Estábamos en el <strong>Paso 1</strong>: Indica el nombre de la empresa y la ciudad de domicilio.</p>`);
        break;
      case 2:
        appendBotMessage(`<p>Estábamos en el <strong>Paso 2</strong>: Indica quiénes serán los socios accionistas.</p>`);
        break;
      case 3:
        appendBotMessage(`<p>Estábamos en el <strong>Paso 3</strong>: Indica las actividades u objeto social de la empresa.</p>`);
        break;
      case 4:
        appendBotMessage(`<p>Estábamos en el <strong>Paso 4</strong>: Indica el monto de capital para constituir la sociedad.</p>`);
        break;
      case 5:
        appendBotMessage(`<p>Estábamos en el <strong>Paso 5</strong>: Indica el nombre del Representante Legal.</p>`);
        break;
    }
  }

  // Generador de Estatutos en Tiempo Real
  function updateDocumentPreview() {
    const sharesTotal = Math.floor(state.authorizedCapital / state.shareValue);
    const sharesSubscribed = Math.floor(state.subscribedCapital / state.shareValue);

    const docHTML = `
      <div class="statute-title">
        DOCUMENTO PRIVADO DE CONSTITUCIÓN DE SOCIEDAD POR ACCIONES SIMPLIFICADA<br>
        "${state.name}"
      </div>

      <p class="statute-article">
        En la ciudad de <strong>${state.city}</strong>, República de Colombia, los suscritos comparecientes constituyen mediante el presente documento privado una <strong>Sociedad por Acciones Simplificada</strong> que se regirá por las disposiciones de la <strong>Ley 1258 de 2008</strong>, por las normas supletorias del Código de Comercio y por los presentes estatutos:
      </p>

      <div class="statute-chapter">Capítulo I — Nombre, Especie, Domicilio y Duración</div>
      
      <p class="statute-article">
        <strong>ARTÍCULO 1. RAZÓN SOCIAL:</strong> La sociedad se denominará <strong>${state.name}</strong>.
        <span class="legal-citation">Fundamento: Art. 5 num. 2 de la Ley 1258 de 2008.</span>
      </p>

      <p class="statute-article">
        <strong>ARTÍCULO 2. DOMICILIO:</strong> El domicilio principal de la sociedad será la ciudad de <strong>${state.city}</strong>, pudiendo establecer sucursales o agencias en cualquier lugar del territorio nacional o en el exterior.
        <span class="legal-citation">Fundamento: Art. 5 num. 3 de la Ley 1258 de 2008.</span>
      </p>

      <p class="statute-article">
        <strong>ARTÍCULO 3. TÉRMINO DE DURACIÓN:</strong> La sociedad tendrá una duración indefinida.
        <span class="legal-citation">Fundamento: Art. 5 num. 4 de la Ley 1258 de 2008.</span>
      </p>

      <div class="statute-chapter">Capítulo II — Objeto Social</div>

      <p class="statute-article">
        <strong>ARTÍCULO 4. ACTIVIDADES SOCIALES:</strong> ${state.purpose}
        <span class="legal-citation">Fundamento: Art. 5 num. 5 de la Ley 1258 de 2008.</span>
      </p>

      <div class="statute-chapter">Capítulo III — Capital y Acciones</div>

      <p class="statute-article">
        <strong>ARTÍCULO 5. CAPITAL AUTORIZADO, SUSCRITO Y PAGADO:</strong><br>
        • <strong>Capital Autorizado:</strong> La suma de $${state.authorizedCapital.toLocaleString('es-CO')} COP, dividido en ${sharesTotal.toLocaleString('es-CO')} acciones ordinarias con un valor nominal de $${state.shareValue.toLocaleString('es-CO')} COP cada una.<br>
        • <strong>Capital Suscrito:</strong> La suma de $${state.subscribedCapital.toLocaleString('es-CO')} COP, correspondiente a ${sharesSubscribed.toLocaleString('es-CO')} acciones.<br>
        • <strong>Capital Pagado:</strong> La suma de $${state.paidCapital.toLocaleString('es-CO')} COP ingresado a la caja social.
        <span class="legal-citation">Fundamento: Artículos 5 num. 6 y 9 de la Ley 1258 de 2008.</span>
      </p>

      <div class="statute-chapter">Capítulo IV — Órganos de Dirección y Administración</div>

      <p class="statute-article">
        <strong>ARTÍCULO 6. ASAMBLEA GENERAL DE ACCIONISTAS:</strong> El órgano máximo de la sociedad es la Asamblea General de Accionistas, integrada por los accionistas: <em>${state.partners.join(', ')}</em>.
        <span class="legal-citation">Fundamento: Artículos 17 y siguientes de la Ley 1258 de 2008.</span>
      </p>

      <p class="statute-article">
        <strong>ARTÍCULO 7. REPRESENTACIÓN LEGAL:</strong> La representación legal de la sociedad y la gestión de los negocios sociales estará a cargo de <strong>${state.legalRep}</strong>, quien tendrá plenas facultades de disposición y administración.
        <span class="legal-citation">Fundamento: Artículo 26 de la Ley 1258 de 2008.</span>
      </p>

      <p class="statute-article">
        <strong>ARTÍCULO 8. JUNTA DIRECTIVA Y REVISORÍA FISCAL:</strong> ${state.hasBoard ? 'La sociedad contará con Junta Directiva.' : 'La sociedad no contará con Junta Directiva; sus funciones serán asumidas por el Representante Legal (Art. 25 Ley 1258/08).'} ${state.hasAuditor ? 'Se designará Revisor Fiscal.' : 'La sociedad no tendrá Revisor Fiscal salvo cuando la ley expresamente lo ordene por montos de activos (Art. 28 Ley 1258/08).'}
        <span class="legal-citation">Fundamento: Artículos 25 y 28 de la Ley 1258 de 2008.</span>
      </p>

      <div class="statute-chapter">Capítulo V — Disolución y Liquidación</div>

      <p class="statute-article">
        <strong>ARTÍCULO 9. CAUSALES DE DISOLUCIÓN:</strong> La sociedad se disolverá únicamente por las causales previstas en el artículo 34 de la Ley 1258 de 2008.
        <span class="legal-citation">Fundamento: Artículos 34 y 35 de la Ley 1258 de 2008.</span>
      </p>

      <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #cbd5e1;">
      <p style="font-size: 0.8rem; color: #64748b; text-align: center;">
        Constancia de constitución para radicación ante Cámara de Comercio · Generado académicamente por SASify Colombia
      </p>
    `;

    docPreview.innerHTML = docHTML;
  }

  // Utilidades de parsing
  function extractCity(str) {
    const match = str.match(/en\s+([a-záéíóúñ\s]+)/i);
    return match ? match[1].trim() : null;
  }

  function parsePartners(str) {
    const parts = str.split(/,| y | e /i).map(s => s.trim()).filter(s => s.length > 0);
    return parts.length > 0 ? parts : ['Accionista 1', 'Accionista 2'];
  }

  function extractAmount(str) {
    const clean = str.replace(/\$|\.|\,/g, '');
    const num = parseInt(clean.match(/\d+/));
    if (!isNaN(num) && num > 1000) {
      if (str.toLowerCase().includes('mill')) return num * 1000000;
      return num;
    }
    return 10000000; // Valor por defecto
  }

  // Funciones de mensajería en UI
  function appendBotMessage(html) {
    const msg = document.createElement('div');
    msg.className = 'msg bot';
    msg.innerHTML = `
      <div class="msg-header">SASify Colombia · Asistente Legal</div>
      <div class="msg-body">${html}</div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendUserMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'msg user';
    msg.innerHTML = `
      <div class="msg-header">Tú (Emprendedor)</div>
      <div class="msg-body">${escapeHTML(text)}</div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function escapeHTML(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
  }

  // Copiar y descargar estatutos
  btnCopy.addEventListener('click', () => {
    const text = docPreview.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('📋 ¡Estatutos copiados al portapapeles!');
    }).catch(() => {
      alert('No se pudo copiar automáticamente. Puedes seleccionar el texto y presionar Ctrl+C.');
    });
  });

  btnDownload.addEventListener('click', () => {
    const text = docPreview.innerText;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Estatutos_${state.name.replace(/\s+/g, '_')}.txt`;
    link.click();
  });
});
