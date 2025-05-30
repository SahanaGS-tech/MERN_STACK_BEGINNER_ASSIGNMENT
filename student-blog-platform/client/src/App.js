import React, { useState, useEffect } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { postAPI } from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    published: "",
    author: "",
  });

  // TODO: Fetch posts from API
  const fetchPosts = async () => {
    try {
      setLoading(true);
      // TODO: Call postAPI.getAllPosts with filters
      const response = await postAPI.getAllPosts(filters);
      // TODO: Update posts state with response data
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // TODO: Handle creating new post
  const handleCreatePost = async (postData) => {
    try {
      // TODO: Call postAPI.createPost with postData

      // TODO: Refresh posts list

      // TODO: Hide form
      setShowForm(false);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // TODO: Handle updating existing post
  const handleUpdatePost = async (postData) => {
    try {
      // TODO: Call postAPI.updatePost with editingPost._id and postData

      // TODO: Refresh posts list

      // TODO: Reset editing state
      setEditingPost(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // TODO: Handle deleting post
  const handleDeletePost = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      // TODO: Call postAPI.deletePost with postId
      // TODO: Refresh posts list
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // TODO: Handle toggling publish status
  const handleTogglePublish = async (postId) => {
    try {
      // TODO: Call postAPI.togglePublish with postId
      // TODO: Refresh posts list
    } catch (error) {
      console.error("Error toggling publish status:", error);
    }
  };

  // TODO: Handle editing post
  const handleEditPost = (post) => {
    // TODO: Set editingPost state

    // TODO: Show form
    setShowForm(true);
  };

  // TODO: Handle filter changes
  const handleFilterChange = (filterType, value) => {
    // TODO: Update filters state
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // TODO: Fetch posts when component mounts or filters change
  useEffect(() => {
    fetchPosts();
  }, [filters]);

  return (
    <div className="App">
      <header className="app-header">
        <h1>📝 Student Blog Platform</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowForm(!showForm);
            setEditingPost(null);
          }}
        >
          {showForm ? "Cancel" : "New Post"}
        </button>
      </header>

      <main className="app-main">
        <div className="container">
          {/* TODO: Filters Section */}
          <div className="filters">
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
              <option value="travel">Travel</option>
              <option value="other">Other</option>
            </select>

            <select
              value={filters.published}
              onChange={(e) => handleFilterChange("published", e.target.value)}
            >
              <option value="">All Posts</option>
              <option value="true">Published Only</option>
              <option value="false">Drafts Only</option>
            </select>

            <input
              type="text"
              placeholder="Filter by author..."
              value={filters.author}
              onChange={(e) => handleFilterChange("author", e.target.value)}
            />
          </div>

          {/* TODO: Conditional Form Rendering */}
          {showForm && (
            <PostForm
              onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
              initialData={editingPost}
              isEditing={!!editingPost}
            />
          )}

          {/* TODO: Posts List */}
          <PostList
            posts={posts}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
            onTogglePublish={handleTogglePublish}
            loading={loading}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
