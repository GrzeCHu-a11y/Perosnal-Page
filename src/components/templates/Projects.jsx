import React, { useState, useEffect } from "react";
import styles from "./Projects.module.scss";
import SectionHeader from "../molecules/sectionHeader/SectionHeader";
import ProjectCard from "../molecules/projectCard/ProjectCard";
import { useQuery } from "graphql-hooks";
import { HOMEPAGE_QUERY } from "../../api/Client";
import FetchDataButton from "../atoms/FetchDataButton/FetchDataButton";
import ProjectsFilter from "../molecules/projectsFilter/ProjectsFilter";

const Projects = () => {
  const [limit, setLimit] = useState(3);
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit,
    },
  });

  useEffect(() => {
    if (data && data.allCards) {
      setProjects(data.allCards);
    }
  }, [data]);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.projecttype === filter);

  return (
    <section className={styles.projects}>
      <SectionHeader h2={"PROJECTS"} p={"Some of Games , Pages and Design projects"} />
      <ProjectsFilter fn={handleFilterChange} />
      <h3>{filter}</h3>
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
