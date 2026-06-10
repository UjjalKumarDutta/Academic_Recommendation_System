const express = require("express");

const {
  getRecommendation,
  getSubmissions,
} = require("../controllers/recommendationController");

const router = express.Router();

router.post(
  "/recommend",
  getRecommendation
);

router.get(
  "/submissions",
  getSubmissions
);

module.exports = router;