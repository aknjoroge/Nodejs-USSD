let messageController = require("../controller/messageController");
let express = require("express");

let routes = express.Router();

routes.post("/", messageController.sendMessage);

module.exports = routes;
