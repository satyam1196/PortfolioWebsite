import React from 'react';

const posts = [
  {
    title: 'Building Accessible React Apps',
    date: 'July 2025',
    summary: 'Tips and best practices for making React applications accessible to all users.'
  },
  {
    title: 'Optimizing Performance in Vite Projects',
    date: 'June 2025',
    summary: 'How to leverage Vite and modern tooling for fast, performant web apps.'
  }
];

const Blog = () => (
  <section id="blog" className="section">
    <h2>Blog</h2>
    <div className="blog-list">
      {posts.map((post, idx) => (
        <div key={idx} className="blog-post">
          <h3>{post.title}</h3>
          <p><em>{post.date}</em></p>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;
