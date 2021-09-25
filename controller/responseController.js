let userController = require("./userController");

//=====Global set data
let phoneNumber;
let textArray;
//======localls=======
let userNewPhone;
let response = "END failed customly";

exports.globalData = function (phone, array = "") {
  phoneNumber = phone;
  textArray = array;
};

//=========USER REGISTRARTION===========
exports.resgisterScreen = async function (req, res, next) {
  res.set("Content-Type: text/plain");
  response = `CON TechKey Cybernetics USSD Service \n Please register to continue  
    1. Register
    2. Exit
    &copy; TechKey Cybernetics`;
  res.send(response);
};
exports.resgisterScreenStage1 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  response = `CON Please Confirm this is your Number
    ${phoneNumber} 
    1. Confirmed
    2. Change Number
    `;
  res.send(response);
};
exports.resgisterScreenStage2 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[1] == 2) {
    response = `CON Enter a new Number : 07........ `;
  }
  if (textArray[1] == 1) {
    response = `CON Enter Your Full Name`;
  }
  res.send(response);
};
exports.resgisterScreenStage3 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[1] == 2) {
    response = `CON Phone number updated to ${textArray[2]}
        continue with registration?
        1. Yes
        2. No `;
  }
  if (textArray[1] == 1) {
    response = `CON Enter your Id number `;
  }
  res.send(response);
};
exports.resgisterScreenStage4 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[1] == 2) {
    console.log("textArray[3]", textArray[3]);
    if (textArray[3] == 2) {
      response = `END Registration Cancelled `;
    }
    if (textArray[3] == 1) {
      response = `CON Enter Your Full Name `;
    }
  }
  if (textArray[1] == 1) {
    response = `CON Set a password`;
  }
  // response = `END Your account number isACC100101`;
  res.send(response);
};
exports.resgisterScreenStage5 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[1] == 2) {
    response = `CON Enter your Id number`;
  }
  if (textArray[1] == 1) {
    // userpassword

    response = `CON confirm the password`;
  }
  res.send(response);
};
exports.resgisterScreenStage6 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[1] == 2) {
    response = `CON  Set a password`;
  }
  if (textArray[1] == 1) {
    if (textArray[4] != textArray[5]) {
      response = `END  Your Passwords Do Not Match`;
      console.log("textArray pass here", textArray);
    } else if (textArray[4] == textArray[5]) {
      console.log("textArray here", textArray);
      userController.createUser(
        textArray[2],
        textArray[3],
        phoneNumber,
        textArray[4]
      );

      response = `END  You have been registered`;
    }
  }
  res.send(response);
};
exports.resgisterScreenStage7 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[1] == 2) {
    response = `CON  Confirm the password`;
  }
  if (textArray[1] == 1) {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage8 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[7] != textArray[6]) {
    response = `CON Your Passwords Do Not Match
        1. Retry`;
  } else {
    if (textArray[1] == 2) {
      //Encrypt password and save
      if (textArray[1] == 2) {
        userNewPhone = textArray[2];
      }

      console.log("textArray", textArray);
      let controllerPhone = userNewPhone ? userNewPhone : phoneNumber;
      userController.createUser(
        textArray[4],
        textArray[5],
        controllerPhone,
        textArray[6]
      );

      response = `END You have been registered`;
    }
    if (textArray[1] == 1) {
      response = `END you are not registered`;
    }
  }
  res.send(response);
};

exports.resgisterScreenStage9 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[7] != textArray[6] && textArray[1] == 2) {
    response = `CON Enter a password`;
  } else {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage10 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[7] != textArray[6] && textArray[1] == 2) {
    response = `CON Confirm the password`;
  } else {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage11 = function (req, res, next) {
  res.set("Content-Type: text/plain");
  if (textArray[7] != textArray[6] && textArray[1] == 2) {
    if (textArray[10] == textArray[9]) {
      //encrypt password
      if (textArray[1] == 2) {
        userNewPhone = textArray[2];
      }

      let controllerPhone = userNewPhone ? userNewPhone : phoneNumber;
      userController.createUser(
        textArray[4],
        textArray[5],
        controllerPhone,
        textArray[9]
      );

      response = `END  You have been registered `;
    } else {
      response = `END Your Passwords Do Not Match`;
    }
  } else {
    response = `END you are not registered`;
  }
  res.send(response);
};

exports.welcomeScreen = function (req, res, next, user) {
  res.set("Content-Type: text/plain");
  response = `CON Hallo ${user.name}.
   Welcome To Techkey Cybernetics USSD Application
   Select A Service Below
   1. My Account
   2. Send money
   3. My Projects
   4. Development Services
   5. Client Assistance
   &copy; TechKey Cybernetics
    `;
  res.send(response);
};
/** Backup
 * exports.assistance = function (req, res, next, user) {
  response = `Client Assistance`;
  res.send(response);
};
 */
exports.accountMenu = function (req, res, next, user) {
  response = ` CON Account Menu
  1. Check Balance
  2. My Details`;
  res.send(response);
};
exports.sendMoney = function (req, res, next, user) {
  response = `CON Send Money To A Registered User.
  Enter phone number`;
  res.send(response);
};

exports.myProjects = function (req, res, next, user) {
  response = `My projects`;
  res.send(response);
};
exports.development = function (req, res, next, user) {
  response = `Development Services`;
  res.send(response);
};
exports.assistance = function (req, res, next, user) {
  response = `Client Assistance`;
  res.send(response);
};
exports.userBalance = function (req, res, next, user) {
  let now = Date.now();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  let formatedDate = new Intl.DateTimeFormat("en-US", options).format(now);
  response = `END Account Balance      
  Your Account Balance was KSh 18,000 on ${formatedDate}.
  A confirmation SMS has been sent To you.`;
  res.send(response);
};

exports.userDetails = function (req, res, next, user) {
  response = `END Account Details
  Name : ${user.name}
  Phone : ${user.phone}
  ID no : ${user.id_no}`;
  res.send(response);
};

exports.enterSendAmount = function (req, res, next, user) {
  response = `END Enter Amount To Send
  `;
  res.send(response);
};
exports.confirmSendingMoney = function (req, res, next, user) {
  console.log(textArray);

  let isRegistered = userController.checkIfUserIsRegistered(textArray[1]);
  if (!isRegistered) {
    response = `END The phone number ${textArray[1]}, does not belong to any registerd user of Techkey Cybernetics
    You can only send money to registered users.
    For testing purposes use the numbers provided below 
    1. 0710664418 - Techkey Developer
    2. 0797965680 - Techkey project manger`;
  } else {
    let getRecipient = userController.getUserByPhone(textArray[1]);
    response = `Are you sure you want to transfer money to ${getRecipient.name}
    `;
  }

  res.send(response);
};