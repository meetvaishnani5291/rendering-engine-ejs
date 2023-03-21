const express = require("express");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", (req, res, next) => {
  fs.readFile("./products.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let products = JSON.parse(data);
      res.render("index", { products });
    }
  });
});
app.listen(3000);
