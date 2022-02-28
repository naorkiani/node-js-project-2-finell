const express = require("express");
const router = express.Router();

const newCardRouter = require("../userSystem/bisnessCard/newCard");
const findCardRouter = require("../userSystem/bisnessCard/findCard");
const listRouter = require("../userSystem/bisnessCard/list");

router.use("/new", newCardRouter);
router.use("/find", findCardRouter);
router.use("/list", listRouter);

module.exports = router;
