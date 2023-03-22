import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.scss?inline";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="header">
      <ul>
        <li class="logo">
          <a href="/">Mark Schuurmans</a>
        </li>
        <li class="spacer" aria-hidden="true"></li>
        <li>
          <a class="link" href="/projects">Projects</a>
        </li>
        <li>
          <a class="link" href="/resume">Resume</a>
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
