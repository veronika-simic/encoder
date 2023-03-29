const request = require("supertest");
const app = require("../app");
test("the encode path with token", (done) => {
  const token = "xyz0987654321";
  const encode = "hihihi";
  request(app)
    .post("/encode")
    .set("Authorization", token)
    .send({ userInput: encode })
    .then((response) => {
      expect(response.status).not.toBe(401);
      done();
    });
});

test("the encode path without token", (done) => {
  const token = "";
  const encode = "hihihi";
  request(app)
    .post("/encode")
    .set("Authorization", token)
    .send({ userInput: encode })
    .then((response) => {
      expect(response.status).toBe(401);
      done();
    });
});

test("it should encode the string", (done) => {
  const token = "xyz0987654321";
  const encode = "hihihi";
  request(app)
    .post("/encode")
    .send({ userInput: encode })
    .set("Authorization", token)
    .then((response) => {
      expect(response.text).toBe("h1i1h1i1h1i1");
      done();
    });
});
