// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// function to create table
function createTable(ufoData) {
  
  // remove any data in tbody
  tbody.html("");

  // Append a table to your web page and then add new rows of data for each UFO sighting //
  tableData.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// create table of all data
createTable(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");  

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // console.log(inputValue);
  // console.log(tableData);

  var dataset = tableData;

  // Array of filtered data
  if(inputValue) {
    var filteredData = dataset.filter(row => row.datetime === inputValue);
  }
  console.log(filteredData);

  // Get a reference to the table body
//  var tbody = d3.select("tbody");

  // remove any children from the list to
//  tbody.html("");
//  console.log(tbody);

  // create table of filtered data
  createTable(filteredData);
  
};