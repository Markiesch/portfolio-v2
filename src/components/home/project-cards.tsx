import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../styles/layout/home/_project-cards.scss?inline";
import ProjectCard from "~/components/project-card/project-card";
import { projects } from "~/data/projects";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <div class="cards">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div class="link-container">
        <a class="button" href="/projects">
          <span>All projects</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
});
