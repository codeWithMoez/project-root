const express = require("express");
const Item = require("../models/item");
const router = express.Router();

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).send("Error fetching items");
  }
});

// POST a new item
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    const newItem = new Item({ name, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).send("Error creating item");
  }
});

// DELETE an item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).send("Item not found");
    }
    res.status(200).json(deletedItem);
  } catch (err) {
    res.status(500).send("Error deleting item");
  }
});

module.exports = router;
