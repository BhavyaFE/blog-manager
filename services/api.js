import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com';

// export const fetchPosts = async () => axios.get(`${API_BASE}/posts`);
export const fetchPostById = async (id) => axios.get(`${API_BASE}/posts/${id}`);
export const fetchCommentsByPostId = async (id) => axios.get(`${API_BASE}/posts/${id}/comments`);
export const createPost = async (data) => axios.post(`${API_BASE}/posts`, data);
export const updatePost = async (id, data) => axios.put(`${API_BASE}/posts/${id}`, data);

export const fetchPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const addPost = async (newPost) => {
    try {
        const response = await axios.post(`${API_BASE}/posts`, newPost);  // Correct URL with /posts
        return response.data; // Returning the newly added post
    } catch (error) {
        console.error("Error adding post:", error);
        throw error;
    }
};


export const deletePost = async (id) => {
    try {
        await axios.delete(`${API_BASE}/posts/${id}`);  // Correct endpoint
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};

