import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// TODO: Create axios instance with base URL
const api = axios.create({
  // TODO: Set baseURL to API_BASE_URL
});

// TODO: Implement API functions
export const postAPI = {
  // TODO: Get all posts with optional filters
  getAllPosts: async (filters = {}) => {
    // Hint: Use api.get('/posts', { params: filters })
  },

  // TODO: Get single post by ID
  getPostById: async (id) => {
    // Hint: Use api.get(`/posts/${id}`)
  },

  // TODO: Create new post
  createPost: async (postData) => {
    // Hint: Use api.post('/posts', postData)
  },

  // TODO: Update existing post
  updatePost: async (id, postData) => {
    // Hint: Use api.put(`/posts/${id}`, postData)
  },

  // TODO: Delete post
  deletePost: async (id) => {
    // Hint: Use api.delete(`/posts/${id}`)
  },

  // TODO: Toggle publish status
  togglePublish: async (id) => {
    // Hint: Use api.patch(`/posts/${id}/publish`)
  },
};
