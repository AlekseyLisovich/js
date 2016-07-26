var cities1 = [
  { "city": "Tokyo", "population": "36,923,000" },
  { "city": "Jakarta", "population": "30,000,000" },
  { "city": "Shanghai", "population": "34,000,000" },
  { "city": "Lagos", "population": "21,000,000" },
  { "city": "Seoul", "population": "25,514,000" },
  { "city": "Guangzhou", "population": "25,000,000" },
  { "city": "Mexico City", "population": "21,339,781" },
  { "city": "Shenzhen", "population": "23,300,000" },
  { "city": "Delhi", "population": "21,753,486" },
  { "city": "Beijing", "population": "24,900,000" },
];

var cities2 = [
  { "city": "Beijing", "population": "24,900,000" },
  { "city": "Tokyo", "population": "36,923,000" },
  { "city": "Jakarta", "population": "30,000,000" },
  { "city": "Shanghai", "population": "34,000,000" },
  { "city": "Lagos", "population": "21,000,000" },
  { "city": "Seoul", "population": "25,514,000" },
  { "city": "Mexico City", "population": "21,339,781" },
  { "city": "Guangzhou", "population": "25,000,000" },
  { "city": "Shenzhen", "population": "23,300,000" },
  { "city": "Delhi", "population": "21,753,486" },
];

function comparePopulation(obj1, obj2) {
    if (obj1.population < obj2.population) return 1;
    if (obj1.population > obj2.population) return -1;
return 0;
}

function findAndSort(source, propertyName) {
    source = source.sort(comparePopulation);
    var result = "";
    for (var i = 0; i < source.length; i++) {
        result += "City: " + source[i].city + " , population: " + source[i].population + "<br>";
    }
    window.utils.writeResult(resultBlock11, result);
}

function GetCities(){
  findAndSort(cities1, "population");
}

function GetCities_Check(){
  findAndSort(cities2, "population");
}
