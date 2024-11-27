// server.js

// Import the Express module
const express = require("express");

// Create an Express application
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname, "public", "index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname, "public", "about.html");
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname, "public", "404.html");
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
