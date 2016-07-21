function PartialAny() {
    var result = partialAny(add, null, 5);
    var resultBlock6 = document.getElementById("resultBlock6");
    resultBlock6.innerHTML = result(2);
}

function Check_PartialAny() {
    var result = partialAny(mult, null, 5, 3);
    var resultBlock6 = document.getElementById("resultBlock6");
    resultBlock6.innerHTML = result(2, 3);
}

function partialAny(func, context) {
    var args1 = Array.prototype.slice.call(arguments);
    args1 = args1.slice(2);
    return function() {
        var args2 = Array.prototype.slice.call(arguments);
        var j = 0;
        var checkArray = args1.concat(args2);
        for (var i = 0; i < checkArray.length; i++) {
            if (typeof checkArray[i] == "undefined")
                checkArray[i] = arguments[j];
            j++;
        }
        return func.apply(context, checkArray);
    };
}

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}
