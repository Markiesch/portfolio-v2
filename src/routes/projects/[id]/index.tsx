import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { projects } from "~/data/projects";
import styles from "../../../styles/pages/_project.scss?inline";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";

export default component$(() => {
  useStylesScoped$(styles);

  const projectId = +useLocation().params.id;
  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      {project && (
        <div class="hero">
          <div class="container">
            <div>
              <h1 class="gradient-text">{project.name}</h1>
              <p>{project.description}</p>
              <div>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  class="visit-link button primary"
                >
                  Visit website <ArrowRightIcon />
                </a>
                <a href={project.githubLink} target="_blank" class="button ">
                  View source
                </a>
              </div>
            </div>
            <div>
              <img src={`/projects/${project.image}`} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
});
