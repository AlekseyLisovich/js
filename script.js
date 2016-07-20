function createGenerator() {
    var startNum = document.getElementById("start").value;
    var stepNum = document.getElementById("step").value;
    var count = document.getElementById("count").value;
    var generator = sequence(+startNum, +stepNum);

    var resultBlock1 = document.getElementById("resultBlock1");
    resultBlock1.innerHTML = "Generator is created";

    document.getElementById('calc').onclick = function() {
        writeResult(generator);
    };

    document.getElementById('showArray').onclick = function() {
        var s = take(generator, parseInt(count));
        var resultBlock2 = document.getElementById("resultBlock2");
        resultBlock2.innerHTML = s;
    };
}

function writeResult(g) {
    var resultBlock1 = document.getElementById("resultBlock1");
    resultBlock1.innerHTML = g();
}

function sequence(start, step) {
    var currentIteration = 0;

    return function() {
        return start + step * currentIteration++;
    }
}

function take(fn, count) {
    var array = [];
    for (var i = 0; i < count; i++) {
        array[i] = fn();
    }
    return array;
}
