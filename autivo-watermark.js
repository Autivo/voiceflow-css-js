window.onload = function() {
  var checkExist = setInterval(function() {
    var shadowHost = document.getElementById('voiceflow-chat');
    if (shadowHost && shadowHost.shadowRoot) {
      var chatButton = shadowHost.shadowRoot.querySelector('.vfrc-widget--launcher');
      if (chatButton) {
        clearInterval(checkExist);

        chatButton.addEventListener('click', function() {
          var chatObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              mutation.addedNodes.forEach(function(node) {
                var assistantContainer = node.querySelector('.vfrc-footer--watermark');
                if (assistantContainer) {
                  assistantContainer.innerHTML = 'Powered ⚡️ by <a href="https://autivo.ai" target="_blank">Autivo</a>';
                  chatObserver.disconnect();
                }
              });
            });
          });
          chatObserver.observe(shadowHost.shadowRoot, { childList: true, subtree: true });
        });
      }
    }
  }, 200);
};