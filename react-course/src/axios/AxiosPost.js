import axios from "axios";
import React, { useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const AxiosPost = () => {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const createPost = () => {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default AxiosPost;