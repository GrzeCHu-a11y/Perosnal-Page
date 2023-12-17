import React, { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import SectionHeader from "../molecules/sectionHeader/SectionHeader";
import ProjectCard from "../molecules/projectCard/ProjectCard";
import UseProjectsQuery from "../../hooks/UseProjectsQuery";
import FetchDataButton from "../atoms/FetchDataButton/FetchDataButton";
import ProjectsFilter from "../molecules/projectsFilter/ProjectsFilter";

const Projects = () => {
  const [limit, setLimit] = useState(3);
  const { projects } = UseProjectsQuery(limit);
  const [filter, setFilter] = useState("all");

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.projecttype === filter);

  return (
    <section className={styles.projects} id="projects">
      <SectionHeader h2={"PROJECTS"} p={"Some of Games , Pages and Design projects"} />
      <ProjectsFilter fn={handleFilterChange} active={filter} />
      {filteredProjects.map((project, id) => (
        <ProjectCard
          projectName={project.title}
          src={project.image.url}
          description={project.description}
          demolink={project.demolink}
          gitlink={project.gitlink}
          tech={project.tech}
          key={id}
        />
      ))}
      <FetchDataButton onClick={handleLoadMore} text={"Click to load more"} />
    </section>
  );
};

export default Projects;
