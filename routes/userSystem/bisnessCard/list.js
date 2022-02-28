const express = require("express");
const router = express.Router();
const cardModel = require("../../../model/cardModel");

router.get("/", async (req, res) => {
  try {
    const userId = req.tokenData.id;
    const result = await cardModel.findAllCardByUserId(userId);
    if (result.length == 0) {
      throw "It seems like you don't have any cards yet";
    }
    res.json({ status: 200, msg: "Found something", cards: result });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});
module.exports = router;
