let responseController = require("./responseController");
let userController = require("./userController");

exports.getMenu = function (req, res, next) {
  // Send the response back to the API

  //========= VARIABLES===========
  let level = 0;
  let textArray;
  let user;
  //================== data from Africastalking

  let { sessionId, serviceCode, phoneNumber, text } = req.body;

  if (phoneNumber.startsWith("07")) {
    let number = phoneNumber.slice(1);
    phoneNumber = `+254${number}`;
  }

  if (text) {
    textArray = text.split("*");
    level = textArray.length;
  }

  console.log(phoneNumber);

  //====Passing Global Data
  userController.globalData(phoneNumber);
  responseController.globalData(phoneNumber, textArray, text);

  //=============Registration Process===================
  user = userController.getuser();

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

  //==================User is Registered MAIN APP=======================
  if (user && level == 0) {
    // no text set - home meny
    responseController.welcomeScreen(req, res, next, user);
  } else if (user && level == 1) {
    // One level in,
    if (textArray[0] == 1) {
      responseController.accountMenu(req, res, next, user);
    } else if (textArray[0] == 2) {
      responseController.sendMoney(req, res, next, user);
    } else if (textArray[0] == 3) {
      responseController.myProjects(req, res, next, user);
    } else if (textArray[0] == 4) {
      responseController.development(req, res, next, user);
    } else if (textArray[0] == 5) {
      responseController.assistance(req, res, next, user);
    } else {
      res.send("invalid input");
    }
    // End of one level in,
  } else if (user && level == 2) {
    // second level in
    if (textArray[0] == 1) {
      if (textArray[1] == 1) {
        responseController.confirmPin(req, res, next, user);
      } else if (textArray[1] == 2) {
        responseController.userDetails(req, res, next, user);
      }
    } else if (textArray[0] == 2) {
      responseController.enterSendAmount(req, res, next, user);
    } else if (textArray[0] == 4) {
      if (textArray[1] == 1) {
        responseController.webDevelopment(req, res, next, user);
      } else if (textArray[1] == 2) {
        responseController.appDevelopment(req, res, next, user);
      } else if (textArray[1] == 3) {
        responseController.apiDevelopment(req, res, next, user);
      } else {
        res.send("END invalid input");
      }
    } else {
      res.send("Not set");
    }
    // end of second level in
  } else if (user && level == 3) {
    //third level in
    if (textArray[0] == 2) {
      responseController.confirmSendingMoney(req, res, next, user);
    }
    if (textArray[0] == 1 && textArray[1] == 1) {
      responseController.userBalance(req, res, next, user);
    } else if (textArray[0] == 4) {
      if (textArray[1] == 1) {
        responseController.addAWebProject(req, res, next, user);
      } else if (textArray[1] == 2) {
        responseController.addAnAppProject(req, res, next, user);
      } else if (textArray[1] == 3) {
        responseController.addAnApiProject(req, res, next, user);
      } else {
        res.send("END invalid input");
      }
    }
    //End of third level in
  } else if (user && level == 4) {
    //third level in
    if (textArray[0] == 2) {
      if (textArray[3] == 1) {
        responseController.sendMoneyOperation(req, res, next, user);
      } else {
        res.send("Sending Money Operation Cancelled ");
      }
    }
    //End of third level in
  }

  //End of menu Function
};
