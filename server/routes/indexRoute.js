const express = require("express");
const indexController = require("../controllers/indexController");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/add_message",
  [check("body").not().isEmpty()],
  indexController.addMessage
);
router.get("/get_messages", indexController.getMessages);

module.exports = router;
