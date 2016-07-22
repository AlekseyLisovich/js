"use strict";
window.x = 1;
var ctx = { x: 2 };

function f(a, b) {
  return a + b;
}

function BindFn(context, func) {
  return function() {
    return func.apply(context, arguments);
  };
}

function BindThis(){
  var result = BindFn(ctx, f);
  var resultBlock7 = document.getElementById("resultBlock7");
  resultBlock7.innerHTML = result(1, 2);
}


var MyClass = function(message){
  this.message = message;
}

MyClass.prototype.writeMessage = function(){
  return "Hello " + this.message;
}
