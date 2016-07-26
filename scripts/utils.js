(function() {
    window.utils = {
        writeResult: function(destinationElementId, value) {
          var destinationElement = document.getElementById(destinationElementId);
          destinationElement.innerHTML = value;
        }
    };
})();
