import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchPostById, updatePost } from '../../../services/api';

const EditPost = () => {
    const router = useRouter();
    const { id } = router.query;

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (id) {
            fetchPostById(id).then(({ data }) => {
                setTitle(data.title);
                setBody(data.body);
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePost(id, { title, body });
        alert('Post updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPost;
