const express = require("express");
const router = require("./routes/cars");

const app = express();

app.use(express.json());

app.use("/cars", router);

app.listen("3000", () => {
  console.log("jawk behi");
});
