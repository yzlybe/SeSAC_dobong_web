import axios from "axios";
import { useEffect, useState } from "react";

export default function PracticeLifeCycle2() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);
  return (
    <>
      <p style={{ textAlign: "center" }}>Post List</p>
      {posts.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        posts?.map((post) => {
          return <PostList post={post} key={post.id} />;
        })
      )}
    </>
  );
}

function PostList(props) {
  const { post } = props;
  return (
    <>
      <div key={post.id} style={{ textAlign: "center" }}>
        <p>
          No. {post.id}- {post.title}
        </p>
        <p>{post.body}</p>
      </div>
    </>
  );
}
