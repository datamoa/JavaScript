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
// Copy array to further alteration
var data_copy = data;

//Activate the function on button click
button.on("click", function() {
  
  // Select the input element and get the date search HTML node
  var inputElement = d3.select("#date-search");
  
  // Get the value property of the input element for date search
  var dateValue = inputElement.property("value");

  //Use the filter method to find the input values from the table

  data_copy = data_copy.filter(event => event.datetime === dateValue);
  
  //Find the the 1st element by tag "tbody" and reset the content (empty table for next overwrite) 
  document.getElementsByTagName('tbody')[0].innerHTML='';

  //Fill the table with the filtered search results
  data_copy.forEach(function(filteredSighting) {
    var row = tableData.append("tr");
    Object.entries(filteredSighting).forEach(function([key, value]) {
     var cell = tableData.append('td') 
     cell.text(value);
    });
  });
});

// Select the button
var button = d3.select("#city-button");
//Activate the function on button click
button.on("click", function() {
  
    // Select the input element and get the date search HTML node
    var inputElement = d3.select("#city-search");
    
    // Get the value property of the input element for date search
    var cityValue = inputElement.property("value");
  
    //Use the filter method to find the input values from the table
  
    data_copy = data_copy.filter(event => event.city === cityValue);
    
    //Find the the 1st element by tag "tbody" and reset the content (empty table for next overwrite) 
    document.getElementsByTagName('tbody')[0].innerHTML='';
   
    //Fill the table with the filtered search results
    data_copy.forEach(function(filteredSighting) {
      var row = tableData.append("tr");
      Object.entries(filteredSighting).forEach(function([key, value]) {
       var cell = tableData.append('td') 
       cell.text(value);
      });
    });
  });

  // Select the button
var button = d3.select("#shape-button");
//Activate the function on button click
button.on("click", function() {
  
    // Select the input element and get the date search HTML node
    var inputElement = d3.select("#shape-search");
    
    // Get the value property of the input element for date search
    var shapeValue = inputElement.property("value");
  
    //Use the filter method to find the input values from the table
  
    data_copy = data_copy.filter(event => event.shape === shapeValue);
    
    //Find the the 1st element by tag "tbody" and reset the content (empty table for next overwrite) 
    document.getElementsByTagName('tbody')[0].innerHTML='';
   
    //Fill the table with the filtered search results
    data_copy.forEach(function(filteredSighting) {
      var row = tableData.append("tr");
      Object.entries(filteredSighting).forEach(function([key, value]) {
       var cell = tableData.append('td') 
       cell.text(value);
      });
    });

          // Select the button to activate "Reset table" \return to initial table for new search\
    var button = d3.select("#reset-button");
    button.on("click", function() {
      data_copy = data;
      data.forEach(function(ufoSighting) {
          var row = tableData.append("tr");
          Object.entries(ufoSighting).forEach(function([key, value]) {
          var cell = tableData.append('td') 
          cell.text(value);
          });
        });
    });
  });
  
//   // Select the button to activate "Reset table" \return to initial table for new search\
// var button = d3.select("#reset-button");
//   button.on("click", function() {
//     data_copy = data;
//     data.forEach(function(ufoSighting) {
//         var row = tableData.append("tr");
//         Object.entries(ufoSighting).forEach(function([key, value]) {
//          var cell = tableData.append('td') 
//          cell.text(value);
//         });
//       });
//   });
