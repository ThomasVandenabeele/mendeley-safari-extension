
safari.self.addEventListener('message', function (evt) {
    if (evt.name == 'add-mendeley') {
      var myScriptTag = document.createElement('script');
      myScriptTag.src = "https://static.mendeley.com/bin/extensions/bookmarklet.js";
      document.body.appendChild(myScriptTag);
  
    }
}, false);

// if event handlers are in the global HTML page,
// register with application:
//safari.application.addEventListener("command", performCommand, false);
//safari.application.addEventListener("validate", validateCommand, false);
