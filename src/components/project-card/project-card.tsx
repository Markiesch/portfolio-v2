import { component$ } from "@builder.io/qwik";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";
import type { Project } from "~/data/projects";

export type ProjectCardProps = {
  project: Project;
};

export default component$(({ project }: ProjectCardProps) => {
  return (
    <div class="container grid grid-cols-1 md:grid-cols-2 items-center py-12 [&:nth-of-type(2)]:flex-row-reverse">
      <div class="pr-20">
        <p class="font-mono text-lg pb-2 gradient-text">{project.year}</p>
        <h2 class="text-5xl font-semibold">{project.name}</h2>
        <p class="text-foreground-muted pt-4 pb-8 max-w-[60ch]">
          {project.description}
        </p>
        <a class="button primary mr-2" href={`/projects/${project.id}`}>
          <span>View case study</span> <ArrowRightIcon />
        </a>
        <a class="button" href={project.websiteUrl}>
          <span>Live demo</span>
        </a>
      </div>
      <div class="rounded-xl overflow-hidden mt-8 md:mt-0">
        <img
          class="w-full h-full object-cover"
          src={`/projects/${project.image}`}
          alt=""
        />
      </div>
    </div>
  );
});
