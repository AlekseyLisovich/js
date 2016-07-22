function GetName() {

  var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
  ];

var names = [];

characters.forEach(function(characters) {
  names.push(characters.name);
  });

  var resultBlock8 = document.getElementById("resultBlock8");
  resultBlock8.innerHTML = "Names: " + names;
}
