const express = require("express");
const router = express.Router();

const cardModel = require("../../../model/cardModel");

router.get("/:id", async (req, res) => {
  try {
    const result = await cardModel.findCardById(req.params.id);
    console.log(result);
    res.json({ status: 200, msg: "card found", card: result });
  } catch (err) {
    res.status(400).json({ status: 400, msg: "No article found with this id" });
  }
});
module.exports = router;
