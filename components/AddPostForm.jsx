import { useState } from 'react';
import { addPost } from '../services/api'; // Import the addPost function

const AddPostForm = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,
            userId: 1, // Mock user ID (as it's required by the JSONPlaceholder API)
        };

        try {
            const addedPost = await addPost(newPost);
            onAddPost(addedPost); // Pass the added post to the parent component
            setTitle('');
            setBody('');
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPostForm;
