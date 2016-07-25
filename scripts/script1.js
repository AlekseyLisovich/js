(function() {
    function CreateGenerator() {
        var startNum = document.getElementById("start").value;
        var stepNum = document.getElementById("step").value;

        var generator = sequence(+startNum, +stepNum);
        window.utils.writeResult(resultBlock1, "Generator created");

        document.getElementById('calculateSequence').onclick = function() {
            writeResult(generator);
        };
    }

    function writeResult(gen) {
        var result = "Result: " + gen();
        window.utils.writeResult(resultBlock1, result);
    }

<<<<<<< HEAD
    function sequence(start, step) {
        var currentIteration = 0;
=======
  function writeResult(gen) {
      var resultBlock1 = document.getElementById("resultBlock1");
      resultBlock1.innerHTML ="Result: " + gen();
  }
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081

        return function() {
            return start + step * currentIteration++;
        }
    }

    window.task1 = {
        createGenerator: CreateGenerator,
        sequence: sequence
    };
})()
