import { component$ } from "@builder.io/qwik";
import Hero from "~/components/home/hero";
import ProjectCards from "~/components/home/project-cards";
import AboutHome from "~/components/home/about.home";

export default component$(() => {
  return (
    <>
      <Hero />
      <ProjectCards />
      <AboutHome />
    </>
  );
});
