const express = require("express");

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
  });
});

module.exports = app;