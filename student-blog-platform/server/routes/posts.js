const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { validatePost } = require("../middleware/validation");

// TODO: GET /api/posts - Get all posts with optional filtering
// Requirements:
// - Support query parameters: published, category, author
// - Sort by createdAt in descending order
// - Handle errors properly
router.get("/", async (req, res) => {
  try {
    // TODO: Build query object based on query parameters
    let query = {};

    // TODO: Add filtering logic
    // If req.query.published exists, add to query
    // If req.query.category exists, add to query
    // If req.query.author exists, add to query (case insensitive)

    // TODO: Execute query and sort results
    // Use Post.find(query).sort({ createdAt: -1 })

    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO: GET /api/posts/:id - Get single post and increment views
router.get("/:id", async (req, res) => {
  try {
    // TODO: Find post by ID and increment views by 1
    // Hint: Use findByIdAndUpdate with $inc operator

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO: POST /api/posts - Create new post with validation
router.post("/", validatePost, async (req, res) => {
  try {
    // TODO: Create new post with request body
    // TODO: Save the post
    // TODO: Return the saved post with status 201
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// TODO: PUT /api/posts/:id - Update existing post
router.put("/:id", validatePost, async (req, res) => {
  try {
    // TODO: Find post by ID and update with request body
    // Hint: Use findByIdAndUpdate with options { new: true, runValidators: true }

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// TODO: DELETE /api/posts/:id - Delete post
router.delete("/:id", async (req, res) => {
  try {
    // TODO: Find and delete post by ID

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// TODO: PATCH /api/posts/:id/publish - Toggle post publish status
router.patch("/:id/publish", async (req, res) => {
  try {
    // TODO: Find post by ID

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // TODO: Toggle the published status

    // TODO: Save the post and return it
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
