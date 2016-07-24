<<<<<<< HEAD
var characters1 = [
  { 'name': 'barney', 'age': 36 },
  { 'name': 'fred', 'age': 40 }
];

var characters2 = [
  { 'name': 'tom', 'age': 36 },
  { 'name': 'sam', 'age': 40 }
];

function findName(source, propertyName) {
   var names = [];
   source.forEach(function(item) {
   names.push(item[propertyName]);
 });
//  var names = source.map(function(item){
//      return item && item[propertyName];
//  });
  var result = "Names: " + names;
  window.utils.writeResult(resultBlock8, result);
}

function GetName(){
  findName(characters1, 'name');
}

function GetName_Chech(){
  findName(characters2, 'name');
=======
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
>>>>>>> f1805a9c1bf966828e8da9fe77026abfb38c1081
}
