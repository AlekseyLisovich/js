"use strict";
window.x = 1;
var ctx1 = { x: 2  };
var ctx2 = { x: 7  };

function f(a, b) {
  return this.x + a + b;
}

function BindFn(context, func) {
  return function() {
    return func.apply(context, arguments);
  };
}

function BindThis(){
  var gen = BindFn(ctx1, f);
  var result = "this.x:2 + a:1 + b:2 = " + gen(1, 2);
  window.utils.writeResult('resultBlock7', result);
}

function BindThis_Check(){
  var gen = BindFn(ctx2, f);
  var result = "this.x:7 + a:1 + b:2 = " + gen(1, 2);
  window.utils.writeResult('resultBlock7', result);
}
