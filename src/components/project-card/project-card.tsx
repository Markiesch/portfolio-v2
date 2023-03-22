import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./project-card.scss?inline";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";

export type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
};

export default component$((props: ProjectCardProps) => {
  useStylesScoped$(styles);

  return (
    <div class="project-card">
      <img src={`/projects/${props.image}`} alt="" />
      <div class="information">
        <h2>{props.name}</h2>
        <p>
          { props.description }
        </p>
        <a class="button" href="/projects">
          <span>Read more</span> <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
});
