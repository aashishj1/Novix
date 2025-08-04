const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllVideos,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
  getAllInfographics,
  getInfographicById,
  createInfographic,
  updateInfographic,
  deleteInfographic,
  getAllShortVideos,
  getShortVideoById,
  createShortVideo,
  updateShortVideo,
  deleteShortVideo,
  getUserProgress,
  updateUserProgress,
  getRecommendations,
} = require("../controllers/learningController");
const { authenticateJWT } = require("../middleware/authMiddleware"); // Assuming JWT middleware exists

// Blog routes
router.get("/blogs", authenticateJWT, getAllBlogs);
router.get("/blogs/:id", authenticateJWT, getBlogById);
router.post("/blogs", authenticateJWT, createBlog);
router.put("/blogs/:id", authenticateJWT, updateBlog);
router.delete("/blogs/:id", authenticateJWT, deleteBlog);

// Video routes
router.get("/videos", authenticateJWT, getAllVideos);
router.get("/videos/:id", authenticateJWT, getVideoById);
router.post("/videos", authenticateJWT, createVideo);
router.put("/videos/:id", authenticateJWT, updateVideo);
router.delete("/videos/:id", authenticateJWT, deleteVideo);

// Infographic routes
router.get("/infographics", authenticateJWT, getAllInfographics);
router.get("/infographics/:id", authenticateJWT, getInfographicById);
router.post("/infographics", authenticateJWT, createInfographic);
router.put("/infographics/:id", authenticateJWT, updateInfographic);
router.delete("/infographics/:id", authenticateJWT, deleteInfographic);

// ShortVideo routes
router.get("/shortvideos", authenticateJWT, getAllShortVideos);
router.get("/shortvideos/:id", authenticateJWT, getShortVideoById);
router.post("/shortvideos", authenticateJWT, createShortVideo);
router.put("/shortvideos/:id", authenticateJWT, updateShortVideo);
router.delete("/shortvideos/:id", authenticateJWT, deleteShortVideo);

// User progress routes
router.get("/progress/:userId", authenticateJWT, getUserProgress);
router.post("/progress", authenticateJWT, updateUserProgress);

// Recommendations route
router.get("/recommendations/:userId", authenticateJWT, getRecommendations);

module.exports = router;
