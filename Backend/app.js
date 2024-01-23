const express = require("express");

require("dotenv").config();

const sequelize = require("./utils/database");

const path = require("path");

const coinRoute = require("./routes/product");

const app = express();

app.use(coinRoute);

//Sending frontend through backend
app.use((req, res) => {
  if (req.url === "/") {
    res.sendFile(path.join(__dirname, `../Frontend/index.html`));
  } else {
    res.sendFile(path.join(__dirname, `../Frontend/${req.url}`));
  }
});

sequelize.sync().then(() => {
  app.listen(3000);
});
