import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../styles/pages/_projects.scss?inline";
import { projects } from "~/components/home/project-cards/projects";
import ProjectCard from "~/components/project-card/project-card";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section class="hero">
        <h1 class="gradient-text">Projects</h1>
        <p>Here you will find a few projects I made in my free time, or while learning a new technology.</p>
      </section>
      <section class="project-section container">
        {
          projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))

        }
      </section>
    </>
  );
});
