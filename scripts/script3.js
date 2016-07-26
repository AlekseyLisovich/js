function ArrayMap() {
    var array = document.getElementById("array").value;
    var result = "X^2 Result: " + numSquare(square, array);
    window.utils.writeResult('resultBlock3', result);
}

function numSquare(func, a) {
    var r = [];
    array = a.match(/\d+/g);
    for (var i = 0; i < array.length; i++) {
        r[i] = func(array[i]);
    }
    return r;
}

function square(x) {
    return x * x;
}
