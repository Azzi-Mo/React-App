import React from "react";
const BlogList = (props) => {
  const { blogs, title , handelDelet } = props;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <>
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
              <button onClick={()=> handelDelet(blog.id)}>Delet</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default BlogList;
