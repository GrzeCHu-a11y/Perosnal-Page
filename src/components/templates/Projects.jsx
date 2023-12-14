import React from "react";
import styles from "./Projects.module.scss";
import SectionHeader from "../molecules/sectionHeader/SectionHeader";
import ProjectCard from "../molecules/projectCard/ProjectCard";
import { useQuery } from "graphql-hooks";
import { HOMEPAGE_QUERY } from "../../api/Client";

const Projects = () => {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 3,
    },
  });
  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  const projects = data.allCards;
  console.log(projects);

  return (
    <section className={styles.projects}>
      <SectionHeader h2={"PROJECTS"} p={"Some of Games , Pages and Design projects"} />
      {projects.map((project) => (
        <ProjectCard
          projectName={project.title}
          src={project.image}
          description={project.description}
          demolink={project.demolink}
          gitlink={project.gitlink}
          tech={project.tech}
        />
      ))}
    </section>
  );
};

export default Projects;
