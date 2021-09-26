exports.sendMessage = function (req, res, next, user, message) {
  const credentials = {
    apiKey: "9389de2f45c2cb65a068800ded641ef00250458dc23161c1b0699189373847e7", // use your sandbox app API key for development in the test environment
    username: "sandbox", // use 'sandbox' for development in the test environment
  };
  const Africastalking = require("africastalking")(credentials);

  // Initialize a service e.g. SMS
  const sms = Africastalking.SMS;

  // Use the service
  const options = {
    to: [`${user.phone}`],
    message,
    from: "Techkey",
  };

  // Send message and capture the response or error
  sms
    .send(options)
    .then((response) => {
      console.log(response);
      console.log("message sent");
    })
    .catch((error) => {
      console.log(error);
    });
};
