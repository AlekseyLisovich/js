function getPropertyNames(o) {
    var count  = 0;
    for (var prop in o)
      count++;
    return count;
}


function GetProperty(){
    var obj = { a: 1, b: 2, c: 3};

    var result = getPropertyNames(obj);
    var resultBlock10 = document.getElementById("resultBlock10");
    resultBlock10.innerHTML = "The number of properties: " + result;
}
