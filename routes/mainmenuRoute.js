let menucontroller = require("../controller/menuController");
let express = require("express");

let routes = express.Router();

routes.get("/", menucontroller.getMenu);


module.exports = routes;
