import React, { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {

          if (!res.ok) {
            throw Error("could not fetch the data for the resourses");
          }
          return res.json();

        })

        .then((data) => {

          setBlogs(data);
          setPending(false);
          setError(null);

        })
        .catch((error) => {

          setPending(false);
          setError(error.message);

        });
    }, 1000);
  }, []);
  return (
    <div className="home">

      {error && <div>{error}</div>}
      {isPending && <div> loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

    </div>
  );
};

export default Home;
