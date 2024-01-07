const express = require("express");
const feedController = require("../controllers/feedbackcontroller");
const router = express.Router();

router.route("/").post(feedController.feedback).get(feedController.getFeedback);
module.exports = router;
