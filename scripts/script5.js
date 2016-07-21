function MyBind(){
    var result = partial(add, null, 5);
    var resultBlock5 = document.getElementById("resultBlock5");
    resultBlock5.innerHTML = result(2);
}

function Check_Bind(){
    var result = partial(mult, null, 5, 2);
    var resultBlock5 = document.getElementById("resultBlock5");
    resultBlock5.innerHTML = result(2, 2);
}

function partial(func, context) {
  var args1 = Array.prototype.slice.call(arguments);
  args1 = args1.slice(2);
  return function() {
    var args2 = Array.prototype.slice.call(arguments);
    return func.apply(context, args1.concat(args2));
  };
}

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
   return a * b * c * d;
 }
