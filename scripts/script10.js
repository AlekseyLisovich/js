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
}
