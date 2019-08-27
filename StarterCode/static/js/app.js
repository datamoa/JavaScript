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

//Activate the function on button click
button.on("click", function() {
  
  // Select the input element and get the date search HTML node
  var inputElement = d3.select("#date-search");
  
  // Get the value property of the input element for date search
  var dateValue = inputElement.property("value");

  // Select the input element and get the city search HTML node
  inputElement = d3.select("#city-search");

  // Get the value property of the input element for city search
  var cityValue = inputElement.property("value");

  // Select the input element and get the shape search HTML node
  inputElement = d3.select("#shape-search");

  // Get the value property of the input element for shape search
  var shapeValue = inputElement.property("value");


  //Use the filter method to find the input values from the table

  var filteredData;
  if(dateValue != ""){
    filteredData = data.filter(event => event.datetime === dateValue);
  }
  
  if(cityValue != ""){
    filteredData = filteredData.filter(event => event.city === cityValue);
  }

  if(shapeValue != ""){
    filteredData = filteredData.filter(event => event.shape === shapeValue);
  }
  //Find the the 1st element by tag "tbody" and reset the content (empty table for next overwrite) 
  document.getElementsByTagName('tbody')[0].innerHTML='';
 
  //Fill the table with the filtered search results
  filteredData = filteredData.forEach(function(filteredSighting) {
    var row = tableData.append("tr");
    Object.entries(filteredSighting).forEach(function([key, value]) {
     var cell = tableData.append('td') 
     cell.text(value);
    });
  });
});

