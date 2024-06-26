const express = require('express');
const app = express();

console.log("process.env.testENV => ", process.env.TESTENV);

// Set the port the server will listen on
let PORT = 4000;

// Define a simple GET route
app.get('/env', (req, res) => {
  console.log(process.env);
  let resData = {
    port: PORT,
    testENV: process.env.TESTENV,
    message : "THIS IS THE UPDATED REPSOSNE !!!"
  }

  console.log("resData => ", resData);
  res.send(resData)
});

app.get('/' , (req ,res) => {
  res.send(`Listning on port ${PORT}`)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
