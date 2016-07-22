function MyMap(){
    var result = map(square, mult);
    var resultBlock4 = document.getElementById("resultBlock4");
    resultBlock4.innerHTML = "Multiplication Result: " + result(1, 1, 2, 2);
  }

  function Check_Map(){
      var result = map(square, add);
      var resultBlock4 = document.getElementById("resultBlock4");
      resultBlock4.innerHTML = "Addition Result: " + result(1, 1);
    }

  function map(fn, f) {
      return function() {
          return fn(f.apply(null, arguments));
      }
  }

  function sequence(start, step) {
      var currentIteration = 0;

      return function() {
          return start + step * currentIteration++;
      }
  }

  function square(x) {
      return x * x;
  }

  function add(a, b) {
      return a + b;
  }

  function mult(a, b, c, d) {
     return a * b * c * d;
   }
