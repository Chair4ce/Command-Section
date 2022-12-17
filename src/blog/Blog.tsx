import React, { useState } from 'react';
import './Blog.css';

export interface BlogPost {
    title: string;
    content: string;
    author: string;
    date: string;
}

export interface BlogProps {
    posts: BlogPost[];
}

const Main: React.FC<BlogProps> = ({ posts }) => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const handlePostClick = (post: BlogPost) => {
        setSelectedPost(post);
    };

    return (
        <div className="blog">
            <h1>Blog</h1>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.title} onClick={() => handlePostClick(post)} className="post">
                        <h2>{post.title}</h2>
                        <p>By {post.author}</p>
                        <p>{post.date}</p>
                    </div>
                ))}
            </div>
            {selectedPost && (
                <div className="selected-post">
                    <h1>{selectedPost.title}</h1>
                    <p>{selectedPost.content}</p>
                    <p>By {selectedPost.author}</p>
                    <p>{selectedPost.date}</p>
                </div>
            )}
        </div>
    );
};

export default Main;
