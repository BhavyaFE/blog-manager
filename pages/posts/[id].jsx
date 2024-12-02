import { fetchPostById, fetchCommentsByPostId } from '../../services/api';

const PostDetails = ({ post, comments }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const { id } = params;
    const post = await fetchPostById(id);
    const comments = await fetchCommentsByPostId(id);
    return { props: { post: post.data, comments: comments.data } };
}

export default PostDetails;
