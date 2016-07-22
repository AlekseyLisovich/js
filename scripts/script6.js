function PartialAny() {
    var result = partialAny(add, null, undefined);
    var resultBlock6 = document.getElementById("resultBlock6");
    resultBlock6.innerHTML = "First agr: undefined, second arg: 2 Result: " + result(2);
}

function Check_PartialAny() {
    var result = partialAny(mult, null, 1, undefined, 1);
    var resultBlock6 = document.getElementById("resultBlock6");
    resultBlock6.innerHTML = "First agr: [1, undefined, 1], second args: [2, 4] Result: " + result(2, 4);
}

function partialAny(func, context) {
    var args1 = Array.prototype.slice.call(arguments);
    args1 = args1.slice(2);
    return function() {
        var args2 = Array.prototype.slice.call(arguments);
        var j = 0;
        var checkArray = args1.concat(args2);
        for (var i = 0; i < checkArray.length; i++) {
            if (checkArray[i] == undefined)
            {
                checkArray[i] = arguments[j];
              }
            j++;
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
