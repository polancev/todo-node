const express = require('express');
const Category = require('../models/category');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send(JSON.stringify(categories));
  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const category = new Category(body);
    category.timestamp = Date.now();
    const newCategory = await category.save();
    res.send(JSON.stringify(newCategory));
  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

router.put('/', (req, res) => {

});

router.delete('/', async (req, res) => {
  try {
    const { body } = req;
    const { _id } = body;
    const result = await Category.findByIdAndRemove(_id);
    res.send(result);
  } catch (error) {
    res.statusCode(500).send(error.toString());
  }
});

module.exports = router;
