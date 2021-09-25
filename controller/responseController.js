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

exports.resgisterScreen = async function (req, res, next) {
  response = `CON TechKey Cybernetics USSD Service \n Please register to continue  
    1. Register
    2. Exit
    &copy; TechKey`;
  res.send(response);
};
exports.resgisterScreenStage1 = function (req, res, next) {
  response = `CON Please Confirm this is your Number
    ${phoneNumber} 
    1. Confirmed
    2. Change Number
    `;
  res.send(response);
};
exports.resgisterScreenStage2 = function (req, res, next) {
  if (textArray[1] == 2) {
    response = `CON Enter a new Number : 07........ `;
  }
  if (textArray[1] == 1) {
    response = `CON Enter Your Full Name`;
  }
  res.send(response);
};
exports.resgisterScreenStage3 = function (req, res, next) {
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
  if (textArray[1] == 2) {
    response = `CON Enter Your Full Name `;
  }
  if (textArray[1] == 1) {
    response = `CON Set a password`;
  }
  // response = `END Your account number isACC100101`;
  res.send(response);
};
exports.resgisterScreenStage5 = function (req, res, next) {
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
  if (textArray[1] == 2) {
    response = `CON  Set a password`;
  }
  if (textArray[1] == 1) {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage7 = function (req, res, next) {
  if (textArray[1] == 2) {
    response = `CON  Confirm the password`;
  }
  if (textArray[1] == 1) {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage8 = function (req, res, next) {
  if (textArray[7] != textArray[6]) {
    response = `CON Your Passwords Do Not Match
        1. Retry`;
  } else {
    if (textArray[1] == 2) {
      //Encrypt password and save
      if (textArray[1] == 2) {
        userNewPhone = textArray[2];
      }

      let newUser = {
        id: 0.9201050781107354,
        name: textArray[4],
        id_no: textArray[5],
        phone: userNewPhone || phoneNumber,
        password: textArray[6],
        active: true,
      };

      console.log(newUser);
      // let newUserString = JSON.stringify(newUser);
      // const newData = userData + `${newUser}`;
      // fs.writeFileSync("./../dev-data/data/users.json", newUserString);
      response = `END You have been registered`;
    }
    if (textArray[1] == 1) {
      response = `END you are not registered`;
    }
  }
  res.send(response);
};

exports.resgisterScreenStage9 = function (req, res, next) {
  if (textArray[7] != textArray[6] && textArray[1] == 2) {
    response = `CON Enter a password`;
  } else {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage10 = function (req, res, next) {
  if (textArray[7] != textArray[6] && textArray[1] == 2) {
    response = `CON Confirm the password`;
  } else {
    response = `END you are not registered`;
  }
  res.send(response);
};
exports.resgisterScreenStage11 = function (req, res, next) {
  if (textArray[7] != textArray[6] && textArray[1] == 2) {
    if (textArray[10] == textArray[9]) {
      //encrypt password
      if (textArray[1] == 2) {
        userNewPhone = textArray[2];
      }
      let newUser = {
        id: 0.9201050781107354,
        name: textArray[4],
        id_no: textArray[5],
        phone: userNewPhone || phoneNumber,
        password: textArray[9],
        active: true,
      };

      console.log(newUser);

      response = `END  You have been registered `;
    } else {
      response = `END Your Passwords Do Not Match`;
    }
  } else {
    response = `END you are not registered`;
  }
  res.send(response);
};
