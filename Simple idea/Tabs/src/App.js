import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import dataInfo from "./data";
function App() {
  const [data, setData] = useState(dataInfo);
  const { company, dates, duties, title } = data;
  return (
    <section className="section">
      <div className="title">
        <h2>expierencs</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <article className="job-info"></article>
      </div>
    </section>
  );
}

export default App;
