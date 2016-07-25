function PartialAny() {
<<<<<<< HEAD
    var gen = partialAny(add, null, undefined);
    var result = "First agr: undefined, second arg: 2 Result: " + gen(2);
    window.utils.writeResult(resultBlock6, result);
}

function Check_PartialAny() {
    var gen = partialAny(mult, null, 1, undefined, 1);
    var result = "First agr: [1, undefined, 1], second args: [2, 4] Result: " + gen(2, 4);
    window.utils.writeResult(resultBlock6, result);
=======
    var result = partialAny(add, null, undefined);
    var resultBlock6 = document.getElementById("resultBlock6");
    resultBlock6.innerHTML = "First agr: undefined, second arg: 2 Result: " + result(2);
}

function Check_PartialAny() {
    var result = partialAny(mult, null, 1, undefined, 1);
    var resultBlock6 = document.getElementById("resultBlock6");
    resultBlock6.innerHTML = "First agr: [1, undefined, 1], second args: [2, 4] Result: " + result(2, 4);
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
}

function partialAny(func, context) {
    var cuttedArguments = Array.prototype.slice.call(arguments, 2);

    return function() {
<<<<<<< HEAD
        var checkArray = cuttedArguments.concat(Array.prototype.slice.call(arguments));
        for (var i = 0, j = 0; i < checkArray.length; i++) {
            if (typeof checkArray[i] === "undefined") {
                checkArray[i] = arguments[j++];
            }
=======
        var args2 = Array.prototype.slice.call(arguments);
        var j = 0;
        var checkArray = args1.concat(args2);
        for (var i = 0; i < checkArray.length; i++) {
            if (checkArray[i] == undefined)
            {
                checkArray[i] = arguments[j];
              }
            j++;
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
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
