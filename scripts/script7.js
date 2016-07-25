"use strict";
window.x = 1;
<<<<<<< HEAD
var ctx1 = { x: 2  };
var ctx2 = { x: 7  };

function f(a, b) {
  return this.x + a + b;
=======
var ctx = { x: 2 };

function f(a, b) {
  return a + b;
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
}

function BindFn(context, func) {
  return function() {
    return func.apply(context, arguments);
  };
}

function BindThis(){
<<<<<<< HEAD
  var gen = BindFn(ctx1, f);
  var result = "this.x:2 + a:1 + b:2 = " + gen(1, 2);
  window.utils.writeResult(resultBlock7, result);
}

function BindThis_Check(){
  var gen = BindFn(ctx2, f);
  var result = "this.x:7 + a:1 + b:2 = " + gen(1, 2);
  window.utils.writeResult(resultBlock7, result);
=======
  var result = BindFn(ctx, f);
  var resultBlock7 = document.getElementById("resultBlock7");
  resultBlock7.innerHTML = result(1, 2);
}


var MyClass = function(message){
  this.message = message;
}

MyClass.prototype.writeMessage = function(){
  return "Hello " + this.message;
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
}
