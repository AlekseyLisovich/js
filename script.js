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

function arrayMap(){
				var array = document.getElementById("array").value;
        var s = map(square, array);
        var resultBlock3 = document.getElementById("resultBlock3");
        resultBlock3.innerHTML = s;
}

function map(fn, a) {
   var r = [];
   array = a.match(/\d+/g);
   for(var i = 0; i < array.length; i++){
   			r[i] = fn(array[i]);
   }
   return r;
}

function square(x) { return x * x; }
