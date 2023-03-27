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
 *       500:
 *         description: Some server error
 *
 */

const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
	res.status(200);
});





module.exports = router;