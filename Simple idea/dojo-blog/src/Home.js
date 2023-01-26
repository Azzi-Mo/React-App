import React, { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setPending] = useState(true);

  const [name, setName] = useState("mojo");

  // const DeletBlogs = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => res.json())
        .then((data) => {
          setBlogs(data);
          setPending(false);
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  }, []);
  return (
    <div className="home">
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
