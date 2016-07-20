function createGenerator(){
	var startNum = document.getElementById("start").value;
  var stepNum = document.getElementById("step").value;
  var generator = sequence(+startNum, +stepNum);

  document.getElementById('calc').onclick = function() {
  	writeResult(generator);
  };
}

function writeResult(g) {
    	var resultBlock = document.getElementById("result_block");
      resultBlock.innerHTML = g();
}

function sequence(start, step) {
	var currentIteration = 0;

  return function(){
		return start + step * currentIteration++;
	}
}
