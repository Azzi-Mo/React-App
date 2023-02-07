import { useEffect, useState } from "react";
import BlogList from "./BlogList";
// import useFetch from "./useEffect";
const Home = () => {
  // const {
  //   data: blogs,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs");
  // const handelDelet = (id) => {};

  const [blogs, setBlogs] = useState([]);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(
      () =>
        fetch("http://localhost:8000/blogss")
          .then((res) => 
          {  if(!res.ok)
            {
              throw Error('could not fetch the data for that resource')
            }
    
            return res.json()
            //  console.log(res);
          }
            )
          .then((data) => {
            setBlogs(data);
            setPending(false);
            setError(null)
          })
          .catch((error) => {
            setPending(false)
            setError(error.message)
          }),
      1000
    );
  }, []);
  // const handelDelet = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
