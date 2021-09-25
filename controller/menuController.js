let fs = require("fs");

let users = fs.readFileSync(`${__dirname}/../dev-data/data/users.json`);
let userData = JSON.parse(users);

console.log("userData", userData);

exports.getMenu = function (req, res, next) {
  // Send the response back to the API
  res.set("Content-Type: text/plain");
  let user;
  let response = "CON nothing";
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  console.log("req.body", req.body);

  let level = text.split("*");
  console.log("level.length", level.length);

  userData.forEach(function (element, index) {
    if (element.phone == phoneNumber) {
      user = element;
    }
  });

  if (text == "" && !user) {
    response = `CON TechKey Cybernetics USSD Service \n Please register to continue  
    1. Register
    2. Exit
    \n
    &copy; TechKey`;
  } else if (text == "1" && !user) {
    /**
     *  $response  = "CON Welcome $name, to TechKey-Kenya USSD service\n";
        $response .= "1. My Account \n";
        $response .= "2. Send Money \n";
        $response .= "3. Account Balance\n";
        $response .= "4. News Letters \n";
        $response .= "5. Blogging Services \n";
        $response .= "6. Development Services \n";
        $response .= "7. Client Assistance \n";
        $response .= "8. Daily Updates \n";
 
        $response .= " &copy; TechKey";
     */

    // Business logic for first level response
    response = `CON Please Confirm this is your Number
    ${phoneNumber} 
    1. Confirmed
    2. Change Number
    `;
  } else if (text == "1*1") {
    response = `CON Enter Your Name

    `;
    // response = `END You have registered successfully, Dial again *384*8355# to get started.`;
  } else if (text == "1*1") {
    // This is a second level response where the user selected 1 in the first instance
    const accountNumber = "ACC100101";
    // This is a terminal request. Note how we start the response with END
    response = `END Your account number is ${accountNumber}`;
  }

  res.send(response);
};
