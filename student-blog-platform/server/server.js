const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// TODO: Add middleware for parsing JSON and enabling CORS
// Hint: Use app.use() with express.json() and cors()

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect() with a connection string
// Connection string: 'mongodb://localhost:27017/studentblog'

// TODO: Import and use the posts routes
// Hint: const postRoutes = require('./routes/posts');
// Then use: app.use('/api/posts', postRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Student Blog API is running!" });
});

// TODO: Add error handling middleware
// Create a middleware function that handles errors and sends appropriate responses

// TODO: Start the server
// Hint: Use app.listen() with PORT and a callback function
