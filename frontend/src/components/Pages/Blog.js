import React from "react";
import "./Blog.css";

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Importance of Self-Care",
            content:
                "In this blog post, we discuss the significance of self-care and provide practical tips for incorporating self-care routines into your daily life.",
        },
        {
            id: 2,
            title: "Goal Setting Strategies for Success",
            content:
                "Learn effective goal setting strategies that can help you achieve your dreams and create a roadmap for personal and professional success.",
        },
        {
            id: 3,
            title: "Overcoming Obstacles: Building Resilience",
            content:
                "Discover how to overcome obstacles and develop resilience in the face of challenges. We share insights and techniques to help you bounce back stronger.",
        },
    ];

    return (
        <div className="blog-container">
            <h1>Blog</h1>
            {blogPosts.map((post) => (
                <div className="blog-post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;