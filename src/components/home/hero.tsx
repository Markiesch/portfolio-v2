import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../styles/layout/home/_hero.scss?inline";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";
import { MailIcon } from "~/components/icons/mail.icon";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="wrapper">
      <div class="hero container">
        <span class="subheading gradient-text">Design. Build. Improve.</span>
        <h1 class="gradient-text">I build websites your users will love</h1>
        <p>
          Hi I am Mark, a Software Developer with an eye for UI design. I am
          specialized in UI/UX design and responsive web development.
        </p>

        <div>
          <a href="/projects" class="button primary">
            <span>View projects</span> <ArrowRightIcon />
          </a>
          <a href="/contact" class="button">
            {MailIcon} <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
});
