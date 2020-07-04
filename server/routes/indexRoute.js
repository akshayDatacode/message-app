const express = require("express");
const { check } = require("express-validator");
const indexController = require("../controllers/indexController");


const router = express.Router();

router.post(
  "/add_message",
  [check('body').not().isEmpty().withMessage('The Body is required'),check("sender").not().isEmpty().withMessage('Sender is Require') ],
  indexController.addMessage
);
router.get("/get_messages", indexController.getMessages);
router.delete("/delete_message/:id", indexController.deleteMessage);


module.exports = router;
