let fs = require("fs");

// let bookings = fs.readFileSync(`${__dirname}/../dev-data/data/bookings.json`);
// let bookingsObjects = JSON.parse(bookings);

exports.getMenu = function (req, res, next) {
  res.json({
    status: "sucess",
    response: bookingsObjects.length,
    data: {
      bookingsObjects,
    },
  });
};




