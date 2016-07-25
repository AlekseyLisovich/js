function PartialAny() {
    var gen = partialAny(add, null, undefined);
    var result = "First agr: undefined, second arg: 2 Result: " + gen(2);
    window.utils.writeResult(resultBlock6, result);
}

function Check_PartialAny() {
    var gen = partialAny(mult, null, 1, undefined, 1);
    var result = "First agr: [1, undefined, 1], second args: [2, 4] Result: " + gen(2, 4);
    window.utils.writeResult(resultBlock6, result);
}

function partialAny(func, context) {
    var cuttedArguments = Array.prototype.slice.call(arguments, 2);

    return function() {
        var checkArray = cuttedArguments.concat(Array.prototype.slice.call(arguments));
        for (var i = 0, j = 0; i < checkArray.length; i++) {
            if (typeof checkArray[i] === "undefined") {
                checkArray[i] = arguments[j++];
            }
        }
        alert(checkArray);
        return func.apply(context, checkArray);
    };
}

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}
