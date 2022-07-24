const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT;
const app = express();

app.get('/api/goals', (req, res) => {
    res.send('Hello World');
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}
);

