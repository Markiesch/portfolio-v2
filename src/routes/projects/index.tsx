import { component$ } from "@builder.io/qwik";
import { projects } from "~/data/projects";
import ProjectCard from "~/components/project-card/project-card";

export default component$(() => {
  return (
    <>
      <section class="text-center py-20 bg-gradient-to-t from-background-accent border-b border-divider">
        <div>
          <h1 class="text-5xl font-bold gradient-text pb-4">Projects</h1>
          <p class="text-foreground-muted max-w-[60ch] mx-auto">
            Here you will find a few projects I made in my free time, or while
            learning a new technology.
          </p>
        </div>
      </section>
      <section class="pt-20 container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
});
