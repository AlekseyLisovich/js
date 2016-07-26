(function() {
    function CreateGenerator() {
        var startNum = document.getElementById("start").value;
        var stepNum = document.getElementById("step").value;

        var generator = sequence(+startNum, +stepNum);
        window.utils.writeResult('resultBlock1', "Generator created");

        document.getElementById('calculateSequence').onclick = function() {
            writeResult(generator);
        };
    }

    function writeResult(gen) {
        var result = "Result: " + gen();
        window.utils.writeResult('resultBlock1', result);
    }

    function sequence(start, step) {
        var currentIteration = 0;

        return function() {
            return start + step * currentIteration++;
        }
    }

    window.task1 = {
        createGenerator: CreateGenerator,
        sequence: sequence
    };
})()
