import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "http://localhost:3000/"
});

export default function Testito() {
  const [post = {'valor': 'nombre'}, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/testReq");
      setPost(response.data);
    }
    getPost();
  }, []);

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.valor}</h1>
    </div>
  );
}