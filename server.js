let app = require("./app");
let port = process.env.PORT || 2000;

//creating a server using express object

let server = app.listen(port, function () {
  console.log(`server started on port : http://localhost:${port}`);
});
