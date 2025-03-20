// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Define the port number (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Create a simple GET endpoint at the root path
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js! local!!!!!!!!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});