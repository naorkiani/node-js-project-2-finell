const express = require("express");
const router = express.Router();
const cardValid = require("../../../validation/cardValidation");
const modelCard = require("../../../model/cardModel");
const userModel = require("../../../model/userModel");

router.post("/", async (req, res) => {
  try {
    const value = await cardValid.cardSchema.validateAsync(req.body, {
      abortEarly: false,
    });
    console.log(value);
    const findCreator = await userModel.findUserById(req.tokenData.id);
    console.log(findCreator);
    const newCard = await modelCard.createCard({
      title: value.title,
      cardBody: value.cardBody,
      createdBy: findCreator.id,
    });

    res.json({ status: 200, article: newCard });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});

module.exports = router;
