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
 *           description: Valid email
 *         password:
 *           type: string
 *           description: User password that has at least 6 characters and 1 number
 *       example:
 *         email: jane_doe@gmail.com
 *         password: mycoolpassword1
 */



const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
	res.status(200);
});


module.exports = router;