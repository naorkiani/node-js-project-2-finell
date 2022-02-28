const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cardBody: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
});

const card = mongoose.model("cards", cardSchema);

const createCard = (title, cardBody, createdBy, createdAt) => {
  const newACard = new card(title, cardBody, createdBy, createdAt);
  return newACard.save();
};

const findCardById = (cardId) => {
  return card.findById(cardId);
};

const findAllCardByUserId = (userId) => {
  return card.find({ createdBy: userId });
};
const updatePetById = (title, articleBody, createdBy) => {
  return Pets.findByIdAndUpdate(
    id,
    { title, articleBody, createdBy },
    { returnDocument: "after" }
  );
};

module.exports = {
  createCard,
  findCardById,
  findAllCardByUserId,
  updatePetById,
};
