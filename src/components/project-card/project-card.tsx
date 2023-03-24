import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./project-card.scss?inline";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";

export type ProjectCardProps = {
  project: {
    name: string;
    description: string;
    image: string;
    id: number;
  };
};

export default component$(({ project }: ProjectCardProps) => {
  useStylesScoped$(styles);

  return (
    <div class="project-card">
      <img src={`/projects/${project.image}`} alt="" />
      <div class="information">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <a class="button" href={`/projects/${project.id}`}>
          <span>View case study</span> <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
});
