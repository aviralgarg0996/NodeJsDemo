const path = require("path");
const express = require("express");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const publicDir = path.join(__dirname, "../public");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(publicDir));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Aviral garg",
  });
});

app.get("/weather", (req, res) => {
  let { address } = req.query;
  if (!address) {
    return res.send({
      error: "Please enter address query",
    });
  }
  geocode(address, (error, { location } = {}) => {
    if (error) {
      return res.send({
        error: error,
      });
    }
    forecast(location, (error, data) => {
      console.log({ error });
      if (error) {
        return res.send({
          error: error,
        });
      }
      res.send({
        address: req.query.address,
        data: data,
      });
    });
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Weather App",
    name: "Aviral garg",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "Weather App",
    name: "Aviral garg",
  });
});

app.get("/products", (req, res) => {
  console.log(req.query.weather);
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  res.send({
    products: [],
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
