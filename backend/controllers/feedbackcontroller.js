const feedbackModel = require("../models/feedback");

exports.feedback = async (req, res) => {
  try {
    const feedback = await feedbackModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        feedback,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const feedback = await feedbackModel.find();
    res.status(200).json({
      status: "success",
      data: {
        feedback,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
