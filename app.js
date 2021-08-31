const express = require("express");
const cors = require("cors");

const { PORT = 3000 } = process.env;

const app = express();

app.use((error, _, res, __) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({
    status: "error",
    message,
  });
});
