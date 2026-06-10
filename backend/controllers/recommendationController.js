const generateRecommendation = require(
  "../services/recommendationService"
);

const supabase = require("../db/supabase");

const getRecommendation = async (req, res) => {
  try {
    const {
      name,
      email,
      qualification,
      experience,
      profession,
      careerGoal,
    } = req.body;

    const recommendation =
      generateRecommendation(
        qualification,
        experience,
        careerGoal
      );

    const { error } = await supabase
      .from("submissions")
      .insert([
        {
          name,
          email,
          qualification,
          experience,
          profession,
          career_goal: careerGoal,
          recommendation,
        },
      ]);

    if (error) {
      console.error(error);

      return res.status(500).json({
        error: "Failed to save data",
      });
    }

    res.json({
      recommendation,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server Error",
    });
  }
};

const getSubmissions = async (req, res) => {
  try {
    const { data, error } = await supabase
  .from("submissions")
  .select("*")
  .order("id", { ascending: false });
  
console.log("URL:", process.env.SUPABASE_URL);
console.log("DATA:", data);
console.log("ERROR:", error);
    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Failed to fetch submissions",
    });
  }
};

module.exports = {
  getRecommendation,
  getSubmissions,
};