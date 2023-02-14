import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import dataInfo from "./data";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const { company, dates, duties, title } = dataInfo;
  console.log(duties);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="seciton loading">
        <h2>loading...</h2>
      </section>
    );
  }
  return (
    <section className="section">
      <div className="title">
        <h2>expierencs</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        {/* btn container */}
        {/* job info */}

        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-data">{dates}</p>

          {duties.map((duty, indx) => {
            return (
              <div key={indx} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
