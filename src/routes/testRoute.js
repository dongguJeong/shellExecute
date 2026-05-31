const express = require("express");
const { test } = require("../controller/testController");
const router = express.Router();

router.get("/:pts", test);

module.exports = router;
