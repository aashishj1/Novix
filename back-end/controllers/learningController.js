const Blog = require("../models/blogModel");
const Video = require("../models/videoModel");
const Infographic = require("../models/infographicModel");
const ShortVideo = require("../models/shortVideoModel");
const UserProgress = require("../models/userProgressModel");

// Blog CRUD
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Video CRUD
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ success: false, message: "Video not found" });
    res.status(200).json({ success: true, video });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createVideo = async (req, res) => {
  try {
    const video = new Video(req.body);
    await video.save();
    res.status(201).json({ success: true, video });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!video) return res.status(404).json({ success: false, message: "Video not found" });
    res.status(200).json({ success: true, video });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(404).json({ success: false, message: "Video not found" });
    res.status(200).json({ success: true, message: "Video deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Infographic CRUD
const getAllInfographics = async (req, res) => {
  try {
    const infographics = await Infographic.find();
    res.status(200).json({ success: true, infographics });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getInfographicById = async (req, res) => {
  try {
    const infographic = await Infographic.findById(req.params.id);
    if (!infographic) return res.status(404).json({ success: false, message: "Infographic not found" });
    res.status(200).json({ success: true, infographic });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createInfographic = async (req, res) => {
  try {
    const infographic = new Infographic(req.body);
    await infographic.save();
    res.status(201).json({ success: true, infographic });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateInfographic = async (req, res) => {
  try {
    const infographic = await Infographic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!infographic) return res.status(404).json({ success: false, message: "Infographic not found" });
    res.status(200).json({ success: true, infographic });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteInfographic = async (req, res) => {
  try {
    const infographic = await Infographic.findByIdAndDelete(req.params.id);
    if (!infographic) return res.status(404).json({ success: false, message: "Infographic not found" });
    res.status(200).json({ success: true, message: "Infographic deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ShortVideo CRUD
const getAllShortVideos = async (req, res) => {
  try {
    const shortVideos = await ShortVideo.find();
    res.status(200).json({ success: true, shortVideos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getShortVideoById = async (req, res) => {
  try {
    const shortVideo = await ShortVideo.findById(req.params.id);
    if (!shortVideo) return res.status(404).json({ success: false, message: "Short video not found" });
    res.status(200).json({ success: true, shortVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createShortVideo = async (req, res) => {
  try {
    const shortVideo = new ShortVideo(req.body);
    await shortVideo.save();
    res.status(201).json({ success: true, shortVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateShortVideo = async (req, res) => {
  try {
    const shortVideo = await ShortVideo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!shortVideo) return res.status(404).json({ success: false, message: "Short video not found" });
    res.status(200).json({ success: true, shortVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteShortVideo = async (req, res) => {
  try {
    const shortVideo = await ShortVideo.findByIdAndDelete(req.params.id);
    if (!shortVideo) return res.status(404).json({ success: false, message: "Short video not found" });
    res.status(200).json({ success: true, message: "Short video deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// User Progress Tracking
const getUserProgress = async (req, res) => {
  try {
    const userId = req.params.userId;
    const progress = await UserProgress.find({ userId });
    res.status(200).json({ success: true, progress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateUserProgress = async (req, res) => {
  try {
    const { userId, contentType, contentId, progress } = req.body;
    if (!userId || !contentType || !contentId) {
      return res.status(400).json({ success: false, message: "userId, contentType, and contentId are required" });
    }

    let userProgress = await UserProgress.findOne({ userId, contentType, contentId });
    if (userProgress) {
      userProgress.progress = progress;
      userProgress.lastAccessed = new Date();
      await userProgress.save();
    } else {
      userProgress = new UserProgress({ userId, contentType, contentId, progress });
      await userProgress.save();
    }

    res.status(200).json({ success: true, userProgress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Placeholder for AI-based recommendation engine
const getRecommendations = async (req, res) => {
  try {
    // This is a placeholder. Real implementation would use user data to generate recommendations.
    res.status(200).json({ success: true, recommendations: [] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
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
};
