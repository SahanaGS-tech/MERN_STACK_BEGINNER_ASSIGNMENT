import React from "react";

const PostCard = ({ post, onEdit, onDelete, onTogglePublish }) => {
  // TODO: Create helper function to format date
  const formatDate = (dateString) => {
    // TODO: Convert dateString to readable format
    // Hint: Use new Date(dateString).toLocaleDateString()
  };

  // TODO: Create helper function to truncate content
  const truncateContent = (content, maxLength = 150) => {
    // TODO: Return truncated content with "..." if longer than maxLength
  };

  return (
    <div className={`post-card ${post.published ? "published" : "draft"}`}>
      {/* TODO: Post Header */}
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{formatDate(post.createdAt)}</span>
          <span className={`status ${post.published ? "published" : "draft"}`}>
            {post.published ? "Published" : "Draft"}
          </span>
        </div>
      </div>

      {/* TODO: Post Content */}
      <div className="post-content">
        {/* TODO: Display truncated content */}
        <p></p>
      </div>

      {/* TODO: Post Footer */}
      <div className="post-footer">
        <div className="post-info">
          <span className="category">{post.category}</span>
          <span className="views">{post.views} views</span>
          {/* TODO: Display tags if they exist */}
          {post.tags && post.tags.length > 0 && (
            <div className="tags">
              {/* TODO: Map through tags and display them */}
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* TODO: Action Buttons */}
        <div className="post-actions">
          {/* TODO: Edit Button */}
          <button
            className="btn btn-edit"
            onClick={onEdit}
          >
            Edit
          </button>

          {/* TODO: Publish/Unpublish Button */}
          <button
            className={`btn ${
              post.published ? "btn-unpublish" : "btn-publish"
            }`}
            onClick={onTogglePublish}
          >
            {/* TODO: Show appropriate text based on published status */}
          </button>

          {/* TODO: Delete Button */}
          <button
            className="btn btn-delete"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
