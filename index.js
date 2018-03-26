const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const categoryRouter = require('./routes/category');
const todoRouter = require('./routes/todo');

const mongoUrl = 'mongodb://todo-node:87654321@cluster0-shard-00-00-pcbzu.mongodb.net:27017,cluster0-shard-00-01-pcbzu.mongodb.net:27017,cluster0-shard-00-02-pcbzu.mongodb.net:27017/todo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
// const mongoUrl = 'mongodb://127.0.0.1:27017/todo';
const port = 7777;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
})

app.use('/category', categoryRouter);
app.use('/todo', todoRouter);

mongoose.connect(mongoUrl);

app.listen(port, () => `Listerning on port ${port}`);

// graceful shutdown
['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, async () => {
    await mongoose.disconnect();
    process.exit();
  });
});
