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
              assistantContainer.innerHTML =
                'Powered ⚡️ by <a href="https://autivo.ai" target="_blank">Autivo</a>';
              chatObserver.disconnect();
            }
          });
        });
      });

      chatObserver.observe(shadowHost.shadowRoot, { childList: true, subtree: true });

      var existingContainer = shadowHost.shadowRoot.querySelector('.jsli361');
      if (existingContainer) {
        existingContainer.innerHTML =
          'Powered ⚡️ by <a href="https://autivo.ai" target="_blank">Autivo</a>';
        chatObserver.disconnect();
      }
    }
  }, 200);
};
