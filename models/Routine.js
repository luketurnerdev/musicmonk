const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema({
  userId: String,
  title: String,
  steps: Array,
});

module.exports = mongoose.model('Routine', routineSchema);