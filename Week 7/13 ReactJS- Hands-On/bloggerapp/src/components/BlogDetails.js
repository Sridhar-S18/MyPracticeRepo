import React from 'react';
import '../App.css';

function BlogDetails() {
  const blogs = [
    {
      title: 'React State Management',
      author: 'John Doe',
      content: 'Learn how to use useState and useReducer in React.'
    },
    {
      title: 'CSS Grid Tips',
      author: 'Jane Smith',
      content: 'Power up your layouts with CSS Grid.'
    }
  ];

  return (
    <div className="section">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
