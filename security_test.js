//-------- RSPEC-1525

for (i = 1; i<5; i++) {
  // Print i to the Output window.
  Debug.write("loop index is " + i);
  // Wait for user to resume.
  debugger;
}

//-------- RSPEC-1442

if(unexpectedCondition) {
  alert("Unexpected Condition");
}

//-------- RSPEC-1523

let value = eval('obj.' + propName); // Sensitive
let func = Function('obj' + propName); // Sensitive

//-------- RSPEC-1523

for (i = 1; i<5; i++) {
  // Print i to the Output window.
  Debug.write("loop index is " + i);
  // Wait for user to resume.
  debugger; // Sensitive
}

if(unexpectedCondition) {
  alert("Unexpected Condition");  // Sensitive
}

const express = require('express');
const errorhandler = require('errorhandler');

let app = express();
app.use(errorhandler()); // Sensitive
