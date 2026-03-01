const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Pradeep DevOps CI/CD Project 🚀');
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});