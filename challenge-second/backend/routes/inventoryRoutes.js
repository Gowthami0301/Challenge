const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Route to get all inventory items
router.get('/', inventoryController.getAllInventory);

// Route to add a new inventory item
router.post('/', inventoryController.addInventoryItem);

// Route to delete an inventory item
router.delete('/:id', inventoryController.deleteInventoryItem);

// Route to update an inventory item
router.put('/:id', inventoryController.updateInventoryItem);


module.exports = router;
