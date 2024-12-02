const PostDetails = ({ post, comments }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id} style={{ marginBottom: '10px' }}>
                    <strong>{comment.name}</strong>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostDetails;
