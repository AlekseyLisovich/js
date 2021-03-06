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

    document.getElementById('fMap').onclick = function() {
        var squareGen = funcmap(square, generator);
        var resultBlock4 = document.getElementById("resultBlock4");
        resultBlock4.innerHTML = squareGen();
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

function arrayMap() {
    var array = document.getElementById("array").value;
    var s = map(square, array);
    var resultBlock3 = document.getElementById("resultBlock3");
    resultBlock3.innerHTML = s;
}

function map(fn, a) {
    var r = [];
    array = a.match(/\d+/g);
    for (var i = 0; i < array.length; i++) {
        r[i] = fn(array[i]);
    }
    return r;
}

function MyBind() {
    var res = partial(mult, null, 5, 2);
    var resultBlock5 = document.getElementById("resultBlock5");
    resultBlock5.innerHTML = res(2, 2);
}

function square(x) {
    return x * x;
}

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
   return a * b * c * d;
 }

function check() {
    var fm = funcmap(square, add);
    var resultBlock4 = document.getElementById("resultBlock4");
    resultBlock4.innerHTML = fm(1, 1);
}
//splice
function funcmap(fn, f) {
    return function() {
        return fn(f.apply(null, arguments));
    }
}

function partial(func, context) {
  var args1 = Array.prototype.slice.call(arguments);
  args1 = args1.slice(2);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    return func.apply(context, args1.concat(args2));
  };
}
