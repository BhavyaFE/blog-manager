import Link from 'next/link';

import { useState } from 'react';
import { deletePost } from '../services/api'; // Import the deletePost function

const PostList = ({ posts, onDelete }) => {
    const [postList, setPostList] = useState(posts);

    const handleDelete = async (id) => {
        try {
            await deletePost(id);
            setPostList(postList.filter((post) => post.id !== id)); // Remove the post from the list after deleting
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div>
            {postList.map((post) => (
                <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;

