window.addEventListener('load', function() {
  var checkExist = setInterval(function () {
    var shadowHost = document.getElementById('voiceflow-chat');
    if (shadowHost && shadowHost.shadowRoot) {
      clearInterval(checkExist);

      var titleObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            var assistantTitle = node.querySelector('.vfrc-assistant-info--title');
            if (assistantTitle) {
              assistantTitle.innerText = 'MARÍA';
              titleObserver.disconnect();
            }
          });
        });
      });

      titleObserver.observe(shadowHost.shadowRoot, { childList: true, subtree: true });

      var existingTitle = shadowHost.shadowRoot.querySelector('.vfrc-assistant-info--title');
      if (existingTitle) {
        existingTitle.innerText = 'MARÍA';
        titleObserver.disconnect();
      }
    }
  }, 200);
}); 