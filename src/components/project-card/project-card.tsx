import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./project-card.scss?inline";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";
import type { Project } from "~/data/projects";

export type ProjectCardProps = {
  project: Project;
};

export default component$(({ project }: ProjectCardProps) => {
  useStylesScoped$(styles);

  return (
    <div class="project-card container">
      <div class="information">
        <p class="year gradient-text">{project.year}</p>
        <h2>{project.name}</h2>
        <p class="description">{project.description}</p>
        <a class="button primary" href={`/projects/${project.id}`}>
          <span>View case study</span> <ArrowRightIcon />
        </a>
        <a class="button" href={project.websiteUrl}>
          <span>Live demo</span>
        </a>
      </div>
      <div class="image--container">
        <img src={`/projects/${project.image}`} alt="" />
      </div>
    </div>
  );
});
