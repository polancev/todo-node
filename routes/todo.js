const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', (req, res) => {
  try {

  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    todo.updated = Date.now();
    const newTodo = await todo.save();
    res.send(newTodo);
  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

module.exports = router;
