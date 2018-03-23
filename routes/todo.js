const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    todo.updated = Date.now();
    const newTodo = await todo.save();
    res.send(newTodo);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.send(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.findByIdAndRemove(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
