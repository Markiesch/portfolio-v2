import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../styles/layout/_header.scss?inline";
import ArrowRightIcon from "./icons/arrow-right.icon";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="header container">
      <ul>
        <li class="logo">
          <a href="/">Mark.</a>
        </li>
        <li class="spacer" aria-hidden="true"></li>
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
        <li class="spacer" aria-hidden="true"></li>
        <li>
          <a class="button" href="/contact">
            <span>Contact</span>
            <ArrowRightIcon />
          </a>
        </li>
      </ul>
    </header>
  );
});
