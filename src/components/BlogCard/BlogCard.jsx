import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, content, image } = blog;

  // on prend seulement la première image
  const firstImage = image?.[0];
  const imageUrl = firstImage ? `http://localhost:1337${firstImage.url}` : "https://via.placeholder.com/300";

  return (
    <Link to={`/blog/${blog.documentId}`} className="blog-link">
      <div className="blog-card">
      <div className="image">
        <img
          src={imageUrl}
          alt={firstImage?.name || title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <div className="text_post">
        <h3>{title}</h3>
        <p>
          {content.length > 200 ? content.slice(0, 200) + "..." : content}
        </p>
      </div>
    </div>
    </Link>
  
  );
};

export default BlogCard;
