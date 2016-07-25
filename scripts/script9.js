function filterArray(a, predicate) {
    var results = [];
    for (var i = 0; i < a.length; i++) {
        var element = a[i];
        if (predicate(element)) {
            results.push(element);
        }
    }
    return results;
}

function isEven(x) {
    return x % 2 == 0;
}

var input1 = [1, 2, 3, 4, 5, 6];
var input2 = [8, 9, 10, 11, 12, 13];

function Filter() {
    var result = "From [1, 2, 3, 4, 5, 6]: " + filterArray(input1, isEven);
    window.utils.writeResult(resultBlock9, result);
}

function Filter_Check() {
    var result = "From [8, 9, 10, 11, 12, 13]: " + filterArray(input2, isEven);
    window.utils.writeResult(resultBlock9, result);
}
