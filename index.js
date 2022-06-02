const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

const apiRoutes = require("./routes/api.js");

console.log(process.env.ATLAS_CONNECTION_URL);
console.log(process.env.PORT);

mongoose
  .connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
const app = express();
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => {
  console.log("Application is started on PORT = " + process.env.PORT);
});
