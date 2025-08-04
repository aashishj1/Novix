const Questionnaire = require("../models/questionnaireModel");

const calculateResult = (testType, answers) => {
  // Simple example logic: score is number of positive answers (e.g., "yes")
  const positiveAnswers = answers.filter(ans => ans.toLowerCase() === "yes").length;
  let result = "Low";
  if (positiveAnswers > answers.length * 0.7) result = "High";
  else if (positiveAnswers > answers.length * 0.4) result = "Moderate";

  let recommendation = "";
  switch (result) {
    case "High":
      recommendation = "Consider seeking professional help.";
      break;
    case "Moderate":
      recommendation = "Try relaxation techniques and monitor your symptoms.";
      break;
    default:
      recommendation = "Keep up the good work!";
  }

  return { score: positiveAnswers, result, recommendation };
};

const submitQuiz = async (req, res) => {
  try {
    const { userId, testType, answers } = req.body;
    if (!userId || !testType || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ success: false, message: "userId, testType, and answers array are required" });
    }

    const { score, result, recommendation } = calculateResult(testType, answers);

    const questionnaire = new Questionnaire({
      userId,
      testType,
      answers,
      score,
      result,
    });

    await questionnaire.save();

    res.status(201).json({ success: true, message: "Quiz submitted", questionnaire, recommendation });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

const getUserResults = async (req, res) => {
  try {
    const userId = req.params.id;
    const results = await Questionnaire.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({ success: true, results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = {
  submitQuiz,
  getUserResults,
};
