const express = require("express"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express();
const port = 4000;
const login = require("./login");
app.use(express.json());

app.post("/login", login);

/* swagger */
const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: "Express API with Swagger",
      version: '1.3.0',
      description:
        "This is a encoder application made with Express and React and documentated with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Veronika",
        url: "https://github.com/veronika-simic",
        email: "veronikasimic21@gmail.com",
      },
    },
    servers: [
      {
        url: "https://localhost:4000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
