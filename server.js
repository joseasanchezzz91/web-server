const express = require("express");
const app = express();

const hbs = require("hbs");
require("./hbs/helper");

const port = process.env.PORT || 9090

app.use(express.static(__dirname + "/public"));

//EXPRESS HBS
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Jose Sanchez",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    nombre: "Jose Sanchez",
  });
});

app.listen(port, () => {
  console.log(`escuchando ${port}`);
});
