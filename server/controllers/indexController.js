const HttpResponse = require("../models/http-response");
const MessageModel = require("../models/messageModel");

const { validationResult } = require("express-validator");

// ===================================

const addMessage = async (req, res , next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpResponse("Invalid inputs passed, please check your data.", 422),
      console.log(errors) 
      );
  }

  console.log(req.body);
  const { body, sender } = req.body;

  const createdMessage = new MessageModel({
    body,
    sender,
  });

  try {
    await createdMessage.save();
  } catch (err) {
    console.log(err);
    const error = new HttpResponse(err, 500);
    return res.status(500).json({ response: error });
  }
  res.status(201).json({
    body: createdMessage.body,
    sender: createdMessage.sender,
  });
};

// fetchMessages=====================================================================

const getMessages = async (req, res) => {
  try {
    const data = await MessageModel.find({}).sort({"createdAt": -1});
    res.send({ Message: data, success: true });
  } catch (error) {
    console.error(error);
    res.send({ success: false });
  }
};

exports.addMessage = addMessage;
exports.getMessages = getMessages;
