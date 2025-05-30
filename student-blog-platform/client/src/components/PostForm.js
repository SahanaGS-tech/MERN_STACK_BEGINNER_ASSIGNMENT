import React, { useState } from "react";

const PostForm = ({ onSubmit, initialData = null, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    content: initialData?.content || "",
    author: initialData?.author || "",
    category: initialData?.category || "other",
    tags: initialData?.tags?.join(", ") || "",
    published: initialData?.published || false,
  });

  const [errors, setErrors] = useState({});

  // TODO: Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // TODO: Update formData based on input type
    // For checkbox: use checked value
    // For others: use value
  };

  // TODO: Validate form data
  const validateForm = () => {
    const newErrors = {};

    // TODO: Validate title (required, min 5 chars)

    // TODO: Validate content (required, min 10 chars)

    // TODO: Validate author (required, min 2 chars)

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // TODO: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Validate form

    // TODO: Process tags (convert string to array)
    const processedData = {
      ...formData,
      // TODO: Split tags by comma and trim whitespace
    };

    // TODO: Call onSubmit with processed data
  };

  return (
    <form
      className="post-form"
      onSubmit={handleSubmit}
    >
      <h2>{isEditing ? "Edit Post" : "Create New Post"}</h2>

      {/* TODO: Title Input */}
      <div className="form-group">
        <label htmlFor="title">Title *</label>
        {/* TODO: Add input field for title */}

        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      {/* TODO: Author Input */}
      <div className="form-group">
        <label htmlFor="author">Author *</label>
        {/* TODO: Add input field for author */}

        {errors.author && <span className="error">{errors.author}</span>}
      </div>

      {/* TODO: Category Select */}
      <div className="form-group">
        <label htmlFor="category">Category</label>
        {/* TODO: Add select dropdown for category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="education">Education</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* TODO: Tags Input */}
      <div className="form-group">
        <label htmlFor="tags">Tags (comma separated)</label>
        {/* TODO: Add input field for tags */}
      </div>

      {/* TODO: Content Textarea */}
      <div className="form-group">
        <label htmlFor="content">Content *</label>
        {/* TODO: Add textarea for content */}

        {errors.content && <span className="error">{errors.content}</span>}
      </div>

      {/* TODO: Published Checkbox */}
      <div className="form-group">
        <label className="checkbox-label">
          {/* TODO: Add checkbox for published status */}
          Publish immediately
        </label>
      </div>

      {/* TODO: Submit Button */}
      <button
        type="submit"
        className="btn btn-primary"
      >
        {isEditing ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default PostForm;
