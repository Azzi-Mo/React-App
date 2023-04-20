import projectData from "../../data/ProjectsData";

function TechList({ tech }) {
  return (
    <ul>
      {tech[0] &&
        Object.values(tech[0]).map((value) => (
          <li className="li" key={value}>{value}</li>
        ))}
    </ul>
  );
}

function Project({ project }) {
  return (
    <div className="box">
      <h2>{project.name}</h2>
      <TechList tech={project.tech} />
      <a href={project.soursCode}>Source code</a>
      <img src={project.img} alt={project.name} />
    </div>
  );
}

function Nested() {
  return (
    <div className="main">
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Nested;