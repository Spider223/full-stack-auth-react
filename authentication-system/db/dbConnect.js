const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("sucessfully connected to mongodb altas");
    })
    .catch((error) => {
      console.log("unable to connect");
      console.error(error);
    });
}

module.exports = dbConnect;
