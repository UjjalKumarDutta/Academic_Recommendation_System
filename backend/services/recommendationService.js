const generateRecommendation = (
  qualification,
  experience,
  careerGoal
) => {
  experience = Number(experience);

  const goal = careerGoal.toLowerCase();

  if (experience >= 15) {
    return "Honorary Doctorate";
  }

  if (
    qualification === "MBA" &&
    experience >= 5
  ) {
    return "DBA";
  }

  if (
    qualification === "Master's Degree" &&
    goal.includes("research")
  ) {
    return "PhD";
  }

  if (
    qualification === "Bachelor's Degree" &&
    goal.includes("software")
  ) {
    return "M.Tech in Computer Science";
  }

  if (
    qualification === "Bachelor's Degree" &&
    goal.includes("data")
  ) {
    return "Data Science Certification";
  }

  if (
    qualification === "PhD"
  ) {
    return "Post Doctoral Research";
  }

  return "Professional Certification Program";
};

module.exports = generateRecommendation;