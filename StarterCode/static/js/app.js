// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
     // console.log(key, value);
     var cell = tbody.append('td') //Ysis nemelteer oruulsan
     cell.text(value);
    });
  });