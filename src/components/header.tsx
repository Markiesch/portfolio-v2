import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../styles/layout/_header.scss?inline";
import ArrowRightIcon from "./icons/arrow-right.icon";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="header container">
      <div>
        <a class="logo" href="/">
          Mark.
        </a>
      </div>
      <ul>
        <li>
          <a class="link" href="/">
            Home
          </a>
        </li>
        <li>
          <a class="link" href="/projects">
            Projects
          </a>
        </li>
        <li>
          <a class="link" href="/resume">
            Resume
          </a>
        </li>
      </ul>

      <div class="contact-button--container">
        <a class="button" href="/contact">
          <span>Contact</span>
          <ArrowRightIcon />
        </a>
      </div>
    </header>
  );
});
