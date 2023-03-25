import { component$ } from "@builder.io/qwik";
import Hero from "~/components/home/hero";
import ProjectCards from "~/components/home/project-cards";

export default component$(() => {
  return (
    <>
      <Hero />
      <ProjectCards />
    </>
  );
});
