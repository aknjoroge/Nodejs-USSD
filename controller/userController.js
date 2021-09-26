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

exports.updateAmounts = async function (
  sender,
  recepient,
  amount,
  transactioncost
) {
  console.log("recepient", recepient);
  sender.balance -= amount;
  userData.forEach(function (element, index) {
    console.log("element", element);
    if (element.phone == recepient) {
      element.balance += amount - transactioncost;
    }
  });
};

exports.updateRecords = async function (data) {
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
exports.createProject = async function (name, phone, type) {
  let newPoject = {
    name,
    phone,
    type,
  };

  let projects = fs.readFileSync(`${__dirname}/../dev-data/data/projects.json`);
  let projectsData = JSON.parse(projects);
  projectsData.push(newPoject);

  fs.writeFile(
    `${__dirname}/../dev-data/data/projects.json`,
    JSON.stringify(projectsData),
    function (err) {
      if (!err) {
        console.log("Data saved");
      } else {
        console.log(err);
      }
    }
  );
};
exports.getProjects = async function (phone) {
  let userProjects = [];

  let projects = fs.readFileSync(`${__dirname}/../dev-data/data/projects.json`);
  let projectsData = JSON.parse(projects);
  projectsData.forEach(function (element, index) {
    if (element.phone == phone) {
      userProjects.push(element);
    }
  });
  return userProjects;
};
