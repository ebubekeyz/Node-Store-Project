const express = require("express");
const router = express.Router();

const uploadImageCloud = require("../controllers/uploadImageController");

router.route("/uploadImageCloud").post(uploadImageCloud);

module.exports = router;
