function CreateGenerator() {
    var startNum = document.getElementById("start").value;
    var stepNum = document.getElementById("step").value;

    var generator = sequence(+startNum, +stepNum);
    var resultBlock1 = document.getElementById("resultBlock1");
    resultBlock1.innerHTML = "Generator is created";

    document.getElementById('calculateSequence').onclick = function() {
        writeResult(generator);
    };
  }

  function writeResult(gen) {
      var resultBlock1 = document.getElementById("resultBlock1");
      resultBlock1.innerHTML = gen();
  }

  function sequence(start, step) {
      var currentIteration = 0;

      return function() {
          return start + step * currentIteration++;
      }
  }
