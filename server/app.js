require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./router/routes");
const helmet = require("helmet");
const port = process.env.PORT;
require("./utils/db");

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", router);

app.use((req, res) => {
  res.status(404).send({ message: "Notfound" });
});

app.listen(port, () => {
  console.log(
    `Backend running at port ${port}.Please open http://localhost:${port}`
  );
});
