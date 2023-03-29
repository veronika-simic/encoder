/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Valid email address
 *         password:
 *           type: string
 *           description: User password that has at least 6 characters and 1 number
 *       example:
 *         email: optimus.prime@autobots.com
 *         password: validPassword1234!
 *
 *
 *
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Encode:
 *       type: string
 *       required:
 *         - encode
 *       properties:
 *         encode:
 *           type: string
 *           description: String to encode
 *       example:
 *         encode: 'hehhee'
 *
 *
 */

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: The login page for encoding the string
 * /login:
 *   post:
 *     summary: Validates user
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Validated user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: User error	
 *       500:
 *         description: Internal server error
 *   get:
 *     summary: Home page
 *     tags: [Login]
 *     responses:
 *       200:
 *         description: Login page.
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * tags:
 *   name: Encode
 *   description: Encode page for inputing desired string to be encoded
 * /encode:
 *   post:
 *     summary: Encodes a string
 *     tags: [Encode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Encode'
 *     responses:
 *       200:
 *         description: Encoded string.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Encode'
 *       400:
 *         description: User error
 *       500:
 *         description: Internal server error
 *
 */

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200);
});

module.exports = router;
