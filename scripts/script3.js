function ArrayMap() {
    var array = document.getElementById("array").value;
<<<<<<< HEAD
    var result = "X^2 Result: " + numSquare(square, array);
    window.utils.writeResult(resultBlock3, result);
=======
    var result = numSquare(square, array);
    var resultBlock3 = document.getElementById("resultBlock3");
    resultBlock3.innerHTML = "X^2 Result: " + result;
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
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
