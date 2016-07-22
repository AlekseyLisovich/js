function ShowArray(){
    var count = document.getElementById("count").value;
    var generator = sequence(1, 3);
    var result = "sequence(1, 3) result: " + take(generator, parseInt(count));
    window.utils.writeResult(resultBlock2, result);
}

function take(fn, count) {
    var array = [];
    for (var i = 0; i < count; i++) {
        array[i] = fn();
    }
    return array;
}

function sequence(start, step) {
    var currentIteration = 0;

    return function() {
        return start + step * currentIteration++;
    }
}
