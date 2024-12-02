import { useState } from 'react';
import Link from 'next/link';
import { fetchPosts, addPost, deletePost } from '../services/api'; // Import necessary functions

const Home = ({ posts }) => {
    const [postList, setPostList] = useState(posts); // Manage posts in state
    const [newPost, setNewPost] = useState({ title: '', body: '' }); // State for new post form

    // Handle deleting a post
    const handleDelete = async (id) => {
        try {
            await deletePost(id); // Call deletePost from services/api.js
            // Update the UI by removing the deleted post
            setPostList((prevPosts) => prevPosts.filter((post) => post.id !== id));
            alert(`Post ${id} deleted successfully!`);
        } catch (error) {
            console.error("Error deleting post:", error);
            alert('Failed to delete the post. Please try again.');
        }
    };

    // Handle adding a new post
    const handleAddPost = async (e) => {
        e.preventDefault();
        if (!newPost.title || !newPost.body) {
            alert('Please fill in both title and body.');
            return;
        }

        try {
            const addedPost = await addPost(newPost); // Call addPost from services/api.js
            // Update the UI by adding the new post at the beginning of the list
            setPostList((prevPosts) => [addedPost, ...prevPosts]);
            // Reset the form
            setNewPost({ title: '', body: '' });
            alert('Post added successfully!');
        } catch (error) {
            console.error("Error adding post:", error);
            alert('Failed to add the post. Please try again.');
        }
    };

    return (
        <div>
            <h1>Blog Posts</h1>

            {/* Add Post Form */}
            <form onSubmit={handleAddPost}>
                <h3>Add a New Post</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Body"
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                    required
                />
                <button type="submit">Add Post</button>
            </form>

            {/* Display List of Posts */}
            {postList.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                postList.map((post) => (
                    <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        {/* View More link without <a> tag */}
                        <Link href={`/posts/${post.id}`}>
                            View More
                        </Link>
                        <button onClick={() => handleDelete(post.id)} style={{ marginLeft: '10px' }}>
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

// Fetch posts on the server side before rendering the page
export async function getStaticProps() {
    try {
        const posts = await fetchPosts(); // Fetch posts from the API
        return { props: { posts } };
    } catch (error) {
        console.error("Error in getStaticProps:", error);
        return { props: { posts: [] } }; // Fallback to empty array in case of an error
    }
}

export default Home;
