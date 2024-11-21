import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Message from "./Message";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList=useLoaderData();

  return (
    <>
      {/* {fetching && <Loading />} */}
      {postList.length === 0 && <Message />}
      {postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
};
export const postLoader=()=>{
  return fetch("//dummyjson.com/posts")
  .then((res) => res.json())
  .then((obj)=>{
    return obj.posts
  })
}
export default PostList;
