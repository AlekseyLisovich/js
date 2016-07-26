function MyMap(){
    var gen = map(square, mult);
    var result = "Multiplication Result: " + gen(1, 1, 2, 2);
    window.utils.writeResult('resultBlock4', result);
  }

  function Check_Map(){
      var gen = map(square, add);
      var result = "Addition Result: " + gen(1, 1);
      window.utils.writeResult('resultBlock4', result);
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
