const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: String,
  dateEntered: { type: Date, default: Date.now },
  enteredBy: String
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
