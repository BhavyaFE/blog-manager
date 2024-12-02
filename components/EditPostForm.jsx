import { useState, useEffect } from 'react';

const EditPostForm = ({ initialData, onEditPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setBody(initialData.body);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEditPost({ title, body });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPostForm;
