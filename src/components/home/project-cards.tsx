import { component$ } from "@builder.io/qwik";
import ProjectCard from "~/components/project-card/project-card";
import { projects } from "~/data/projects";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";

export default component$(() => {
  return (
    <>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div class="flex py-8 justify-center">
        <a class="button" href="/projects">
          <span>All projects</span>
          <ArrowRightIcon />
        </a>
      </div>
    </>
  );
});
