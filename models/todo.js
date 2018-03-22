const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
  done: Boolean,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoty' },
  timestamp: Date,
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;
