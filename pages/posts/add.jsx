import { useState } from 'react';
import { createPost } from '../../services/api';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost({ title, body });
        alert('Post created successfully!');
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;
