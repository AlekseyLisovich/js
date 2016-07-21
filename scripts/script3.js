function ArrayMap() {
    var array = document.getElementById("array").value;
    var result = numSquare(square, array);
    var resultBlock3 = document.getElementById("resultBlock3");
    resultBlock3.innerHTML = result;
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
