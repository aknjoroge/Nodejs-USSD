let fs = require("fs");
let users = fs.readFileSync(`${__dirname}/../dev-data/data/users.json`);
let userData = JSON.parse(users);

let responseController = require("./responseController");

exports.getMenu = function (req, res, next) {
  // Send the response back to the API
  res.set("Content-Type: text/plain");

  //========= VARIABLES===========
  let level = 0;
  let textArray;
  let user;

  //===================
  //data from Africastalking
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  if (text) {
    textArray = text.split("*");
    level = textArray.length;
  }
  userData.forEach(function (element, index) {
    if (element.phone == phoneNumber) {
      user = element;
    }
  });

  responseController.globalData(phoneNumber, textArray);
  //=============RegistrationProcess===================
  if (level == 0 && !user) {
    responseController.resgisterScreen(req, res, next);
  } else if (level == 1 && !user) {
    responseController.resgisterScreenStage1(req, res, next);
  } else if (level == 2 && !user) {
    responseController.resgisterScreenStage2(req, res, next);
  } else if (level == 3 && !user) {
    responseController.resgisterScreenStage3(req, res, next);
  } else if (level == 4 && !user) {
    responseController.resgisterScreenStage4(req, res, next);
  } else if (level == 5 && !user) {
    responseController.resgisterScreenStage5(req, res, next);
  } else if (level == 6 && !user) {
    responseController.resgisterScreenStage6(req, res, next);
  } else if (level == 7 && !user) {
    responseController.resgisterScreenStage7(req, res, next);
  } else if (level == 8 && !user) {
    responseController.resgisterScreenStage8(req, res, next);
  } else if (level == 9 && !user) {
    responseController.resgisterScreenStage9(req, res, next);
  } else if (level == 10 && !user) {
    responseController.resgisterScreenStage10(req, res, next);
  } else if (level == 11 && !user) {
    responseController.resgisterScreenStage11(req, res, next);
  }
};
