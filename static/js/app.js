// from data.js
var tableData = data;

// YOUR CODE HERE!
// id="ufo-table"

// Get a reference to the table body
var tbody = d3.select("tbody");

// Append a table to your web page and then add new rows of data for each UFO sighting //
data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

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

  // Array of filtered data
  var filteredData = tableData.filter(row => row.datetime === inputValue);

  console.log(filteredData);

  // Get a reference to the table body
  var tbody = d3.select("tbody");

  tbody.html("");

  // Append a table to your web page and then add new rows of data for each UFO sighting //
  tableData.forEach((filteredData) => {
    var row = tbody.append("tr");
    Object.entries(filteredData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//  d3.select("#ufo-table")
//    .selectAll("tr")
//    .data(filteredData)
//    .enter()
//    .append();
  
};