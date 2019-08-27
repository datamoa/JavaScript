// from data.js
var tableData = data;
//Add data key and value to the table
var tableData = d3.select("tbody");
data.forEach(function(ufoSighting) {
    var row = tableData.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
     var cell = tableData.append('td') 
     cell.text(value);
    });
  });
// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#data-input-search");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  
  var filteredData = data.filter(event => event.datetime === inputValue);
  //tbody gesen tagtai element olood (hangiin ekhnii) inner HTML  tbody dotor bgaa value g ergee hooson yumaar orluulna
  document.getElementsByTagName('tbody')[0].innerHTML='';

  filteredData = filteredData.forEach(function(filteredSighting) {
    var row = tableData.append("tr");
    Object.entries(filteredSighting).forEach(function([key, value]) {
     var cell = tableData.append('td') 
     cell.text(value);
    });
  });
});





