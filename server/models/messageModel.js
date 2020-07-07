const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    // Message  Information
    body: { type: String },
    sender: { type: String },
  },
  {
    timestamps: [{ createdAt: "posted_at" }],
  }
);

module.exports = mongoose.model("MessageModel", messageSchema);
