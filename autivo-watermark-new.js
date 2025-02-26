window.onload = function () {
  var checkExist = setInterval(function () {
    var shadowHost = document.getElementById('voiceflow-chat');
    if (shadowHost && shadowHost.shadowRoot) {
      clearInterval(checkExist);

      var chatObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            var assistantContainer = node.querySelector('.jsli361');
            if (assistantContainer) {
              injectCustomWatermark(assistantContainer);
              chatObserver.disconnect();
            }
          });
        });
      });

      chatObserver.observe(shadowHost.shadowRoot, { childList: true, subtree: true });

      var existingContainer = shadowHost.shadowRoot.querySelector('.jsli361');
      if (existingContainer) {
        injectCustomWatermark(existingContainer);
        chatObserver.disconnect();
      }
    }
  }, 200);
};

function injectCustomWatermark(container) {
  if (!container) return;

  // Create a style element for the shadow DOM
  var style = document.createElement('style');
  style.textContent = `
    .watermark {
      text-decoration: none;
      color: blue; /* Adjust as needed */
    }
    .watermark:hover {
      text-decoration: underline;
    }
  `;

  // Create the anchor element
  var watermark = document.createElement('a');
  watermark.href = 'https://autivo.ai';
  watermark.className = 'watermark';
  watermark.target = '_blank';
  watermark.innerHTML = 'Powered ⚡️ by Autivo';

  // Inject the style into the shadow DOM
  container.appendChild(style);
  container.appendChild(watermark);
}
