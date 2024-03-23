const Inventory = require('../models/Inventory');

const inventoryController = {
  getAllInventory: async (req, res) => {
    try {
      // const inventory = await Inventory.find();

       // Mocked inventory data
       const inventory = [
        { _id: 1, itemName: 'Paint', dateEntered: new Date(), enteredBy: 'John Doe' },
        { _id: 2, itemName: 'Tools', dateEntered: new Date(), enteredBy: 'Jane Smith' }
      ];
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

  deleteInventoryItem: async (req, res) => {
    const { id } = req.params;
    try {
      // Mocked response for deleting an inventory item
      res.status(200).json({ message: `Inventory item with ID ${id} has been deleted.` });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  updateInventoryItem: async (req, res) => {
    const { id } = req.params;
    const { itemName, enteredBy } = req.body;
    try {
      // Mocked response for updating an inventory item
      const updatedInventoryItem = { _id: id, itemName, dateEntered: new Date(), enteredBy };
      res.status(200).json(updatedInventoryItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = inventoryController;
