const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/crudapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Could not connect to MongoDB:", error));

// Define an Item model
const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
  })
);

// Routes for CRUD operations
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

app.delete("/items/:id", async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).send("Item not found");
  res.status(200).json(item);
});

// Start the server
app.listen(5000, () => {
  console.log("Backend is running on port 5000");
});
