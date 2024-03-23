const Inventory = require('../models/Inventory');

const inventoryController = {
  getAllInventory: async (req, res) => {
    try {
      const inventory = await Inventory.find();
      res.json(inventory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  addInventoryItem: async (req, res) => {
    const { itemName, enteredBy } = req.body;
    const inventoryItem = new Inventory({
      itemName,
      enteredBy
    });
    try {
      const newInventoryItem = await inventoryItem.save();
      res.status(201).json(newInventoryItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Implement other controller functions for CRUD operations
};

module.exports = inventoryController;
