function getPropertyNames(source) {
    // var count = 0;
    // Object.hasOwnProperty(propName);

    // return Object.keys(source).filter(source.hasOwnProperty.bind(source)).length;
    Object.prototype.keys(source).forEach(function(propName) {
        if (source.hasOwnProperty(propName)) {
            count++;
        }
    });

    // for (var prop in o) {
    //     count++;
    // }

    // return count;
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
    var result = getPropertyNames(obj1);
    window.utils.writeResult(resultBlock10, result);
}

function GetProperty_Check() {
    var result = getPropertyNames(obj2);
    window.utils.writeResult(resultBlock10, result);
}
