import { component$ } from "@builder.io/qwik";
import "../styles/index.css";
import Hero from "~/components/home/hero/hero";
import ProjectCards from "~/components/home/project-cards/project-cards";

export default component$(() => {
  return (
    <>
      <Hero />
      <ProjectCards />
    </>
  );
});
