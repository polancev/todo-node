const express = require('express');
const Category = require('../models/category');

const router = express.Router();

const convertToId = (item) => {
  const itemWithId = Object.assign({}, item.toObject(), { id: item._id });
  delete itemWithId._id;
  return itemWithId;
};

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({}) || [];
    const categoriesWithIds = categories.map(convertToId);
    res.send(categoriesWithIds);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.get('/:parent', async (req, res) => {
  try {
    let { parent } = req.params;
    parent = parent === 'null' ? null : parent;
    const categories = await Category.find({ parent }) || [];
    res.send(categories);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body);
    category.timestamp = Date.now();
    const newCategory = await category.save();
    res.send(newCategory);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findByIdAndUpdate(id, req.body, { new: true });
    res.send(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findByIdAndRemove(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
