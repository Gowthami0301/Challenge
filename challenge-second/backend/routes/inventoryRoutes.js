const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Routes
router.get('/', inventoryController.getAllInventory);
router.post('/', inventoryController.addInventoryItem);


module.exports = router;
