const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// POST /items -> add new item
router.post('/', async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const item = new Item({ name, quantity, price });
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /items -> list all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
