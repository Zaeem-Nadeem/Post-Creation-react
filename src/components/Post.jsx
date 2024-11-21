import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      deletePost(post.id);
    }
  };

  return (
    <div className="scroll card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer"
            onClick={handleDelete}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted to by
          <span className="highlight likes"> {post.reactions?.likes || 0} </span>
          people and disliked by
          <span className="highlight dislikes"> {post.reactions?.dislikes || 0} </span>
          people.
        </div>
      </div>
    </div>
  );
};

export default Post;