const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorMiddleware');

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}
);

