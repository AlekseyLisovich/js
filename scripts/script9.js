function filterArray(a, predicate) {
    var results = [];
    for(var i = 0; i < a.length; i++) {
    var element = a[i];
      if (predicate(element)) results.push(element);
      }
 return results;
}

function isEven(x) { return x % 2 == 0; }

var input = [1, 2, 3, 4, 5, 6];

function Filter(){
  var result = filterArray(input, isEven);
  var resultBlock9 = document.getElementById("resultBlock9");
  resultBlock9.innerHTML = "From: [1, 2, 3, 4, 5, 6] we have: " + result;
}
