//*384*8355#

//requiring express node js module
let express = require("express");
let mainMenu = require("./routes/mainmenuRoute");
let message = require("./routes/messageRoute");

//initialize express
let app = express();

//limiting request json to 10kb
app.use(express.json());
// app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/menu", mainMenu);
app.use("/api/v1/message", message);

app.get("/", function (req, res) {
  res.json({
    application: "USSD",
    method: "GET",
    apiUrl: "/api/v1/",
    url: "expo.techkey.co.ke/ussd",
  });
});

app.post("/", function (req, res) {
  res.json({
    application: "USSD",
    apiUrl: "/api/v1/",
    url: "expo.techkey.co.ke/ussd",
    method: "POST",
  });
});

app.use("*", function (req, res, next) {
  let response = `END Not Found`;
  res.send(response);
});

module.exports = app;
