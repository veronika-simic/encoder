const express = require("express"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express();
const port = 3000;
const login = require("./login");
app.use(express.json());

app.post("/login", login);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
