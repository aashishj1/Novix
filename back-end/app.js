require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const useRoutes = require("./routes/useRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const therapistRoutes = require("./routes/therapistRoutes");
const moodTrackerRoutes = require("./routes/moodTrackerRoutes");
const journalRoutes = require("./routes/journalRoutes");
const questionnaireRoutes = require("./routes/questionnaireRoutes");
const meditationRoutes = require("./routes/meditationRoutes");
const breathingExerciseRoutes = require("./routes/breathingExerciseRoutes");
const selfCareChecklistRoutes = require("./routes/selfCareChecklistRoutes");
const sleepTrackerRoutes = require("./routes/sleepTrackerRoutes");
const affirmationRoutes = require("./routes/affirmationRoutes");
const learningRoutes = require("./routes/learningRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Middleware to parse JSON
app.use(express.json());

// Use authentication routes
app.use("/api/auth", useRoutes);

// Use booking routes
app.use("/api", bookingRoutes);

// Use therapist routes
app.use("/api", therapistRoutes);

// Use mood tracker routes
app.use("/api", moodTrackerRoutes);

// Use journal routes
app.use("/api", journalRoutes);

// Use questionnaire routes
app.use("/api", questionnaireRoutes);

// Use meditation routes
app.use("/api", meditationRoutes);

// Use breathing exercise routes
app.use("/api", breathingExerciseRoutes);

// Use self-care checklist routes
app.use("/api", selfCareChecklistRoutes);

// Use sleep tracker routes
app.use("/api", sleepTrackerRoutes);

// Use affirmation routes
app.use("/api", affirmationRoutes);

// Use learning section routes
app.use("/api", learningRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the basic Express setup!");
});

// Start the server
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
