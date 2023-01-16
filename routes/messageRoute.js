let messageController = require("../controller/messageController");

let express = require("express");

let routes = express.Router();

routes.post(
  "/",
  messageController.sendMessage,
  messageController.closeResponse
);

module.exports = routes;
