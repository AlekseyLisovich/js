function ShowArray(){
    var count = document.getElementById("count").value;
    var generator = sequence(1, 3);
<<<<<<< HEAD
    var result = "sequence(1, 3) result: " + take(generator, parseInt(count));
    window.utils.writeResult(resultBlock2, result);
=======
    var result = take(generator, parseInt(count));
    var resultBlock2 = document.getElementById("resultBlock2");
    resultBlock2.innerHTML = "sequence(1, 3) result: " + result;
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
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
