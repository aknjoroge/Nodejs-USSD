//*384*8355#

//requiring express node js module
let express = require("express");
let mainMenu = require("./routes/mainmenuRoute");
let message = require("./routes/messageRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.js");
//initialize express
let app = express();

//limiting request json to 10kb
app.use(express.json());
// app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/menu", mainMenu);
app.use("/api/v1/message", message);

//Swagger Docs
app.use("/v1", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // TODO develop swagger docs

// app.get("/", function (req, res) {
//   res.json({
//     application: "USSD",
//     method: "GET",
//     apiUrl: "/api/v1/",
//     url: "https://africastalking-nodejs-ussd.cyclic.app",
//   });
// });

// app.post("/", function (req, res) {
//   res.json({
//     application: "USSD",
//     apiUrl: "/api/v1/",
//     url: "https://africastalking-nodejs-ussd.cyclic.app",
//     method: "POST",
//   });
// });

app.use("*", function (req, res, next) {
  let response = `END Not Found`;
  res.send(response);
});

module.exports = app;
