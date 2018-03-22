const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const categoryRouter = require('./routes/category');

const app = express();
const port = 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/category', categoryRouter);

mongoose.connect('mongodb://localhost:27017/todo');

app.listen(port, () => `Listerning on port ${port}`);
