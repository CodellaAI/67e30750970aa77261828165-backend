
const mongoose = require('mongoose');

const dataEntrySchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  count: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const DataEntry = mongoose.model('DataEntry', dataEntrySchema);

module.exports = DataEntry;
