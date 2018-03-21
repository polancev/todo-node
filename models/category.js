const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  isOpen: Boolean,
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Enterprise' },
  timestamp: Date,
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;
