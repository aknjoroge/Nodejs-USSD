let fs = require("fs");
let users = fs.readFileSync(`${__dirname}/../dev-data/data/users.json`);
let userData = JSON.parse(users);
let user;
exports.globalData = function (phone) {
  userData.forEach(function (element, index) {
    if (element.phone == phone) {
      user = element;
    }
  });
};
exports.getuser = function () {
  return user;
};
exports.checkIfUserIsRegistered = function (phone) {
  let present = false;
  userData.forEach(function (element, index) {
    if (element.phone == phone) {
      present = true;
    }
  });
  return present;
};

exports.getUserByPhone = function (phone) {
  let presentuser;
  userData.forEach(function (element, index) {
    if (element.phone == phone) {
      presentuser = element;
    }
  });
  return presentuser;
};

exports.createUser = function (name, idno, phone, password) {
  let id = Date.now().toString();
  let newUser = {
    id,
    name: name,
    id_no: idno,
    phone: phone,
    password: password,
    active: true,
  };

  userData.push(newUser);

  fs.writeFile(
    `${__dirname}/../dev-data/data/users.json`,
    JSON.stringify(userData),
    function (err) {
      if (!err) {
        console.log("Data saved");
      } else {
        console.log(err);
      }
    }
  );
};
