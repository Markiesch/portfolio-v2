import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../styles/pages/_404.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <span>Something went wrong...</span>
      <h1 class="section--title">Oops! We couldn't find that page.</h1>
      <p class="text-body subtitle">Maybe you can find what you need here?</p>
      <div class="link-container">
        <a class="button primary" href="/">
          Home
        </a>
        <a class="button" href="/portfolio">
          Projects
        </a>
        <a class="button" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
});
