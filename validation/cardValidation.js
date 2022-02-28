const Joi = require("joi");

const cardSkeleton = {
  title: Joi.string().min(2).max(50).required(),
  cardBody: Joi.string().required(),
};

const cardSchema = Joi.object(cardSkeleton);

module.exports = {
  cardSchema,
};
