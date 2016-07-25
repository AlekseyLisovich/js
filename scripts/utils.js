(function() {
    window.utils = {
        writeResult: function(destinationElementId, value) {
          var elementId = destinationElementId;
          var destinationElementId= document.getElementById("destinationElementId");
          elementId.innerHTML = value;
        }
    };
})();
