<<<<<<< HEAD
function getPropertyNames(source) {
     var count = 0;

     for (var prop in source) {
         count++;
     }
     return count;
}

var obj1 = {
    a: 1,
    b: 2,
    c: 3
};
var obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

function GetProperty() {
    var result = "The count of properties: " + getPropertyNames(obj1);
    window.utils.writeResult(resultBlock10, result);
}

function GetProperty_Check() {
    var result = "The count of properties: " + getPropertyNames(obj2);
    window.utils.writeResult(resultBlock10, result);
=======
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
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
}
