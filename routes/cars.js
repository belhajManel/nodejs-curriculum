const express = require("express");
const router = express.Router();

const VOITURES = [];

router.get("/", (req, res) => {
  res.status(200).json({ message: VOITURES });
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Invalid body" });
  }
  VOITURES.push({ id: VOITURES.length + 1, name });
  res.status(201).json({ message: VOITURES });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: "Car not found" });
  }
  res.status(200).json({ message: VOITURES[id] });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  const neededId = id - 1;
  if (!VOITURES[neededId]) {
    res.status(404).json({ message: "Car not found" });
  } else {
    VOITURES[id - 1].name = name;

    res.status(200).json({ message: VOITURES[id - 1] });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const neededId = id - 1;

  if (!VOITURES[neededId]) {
    res.status(404).json({ message: "Car not found" });
  } else {
    VOITURES.splice(neededId, 1);
    res.status(200).json({ message: VOITURES });
  }
});

module.exports = router;
