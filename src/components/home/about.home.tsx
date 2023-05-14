import styles from "../../styles/layout/home/_about.scss?inline";
import type { JSXChildren } from "@builder.io/qwik";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";
import { typescriptIcon } from "~/components/icons/typescript.icon";
import { javaIcon } from "~/components/icons/java.icon";
import { nestjsIcon } from "~/components/icons/nestjs.icon";
import { vueJSIcon } from "~/components/icons/vuejs.icon";
import { MailIcon } from "~/components/icons/mail.icon";

export default component$(() => {
  useStylesScoped$(styles);

  const technologies: JSXChildren[] = [
    typescriptIcon,
    javaIcon,
    nestjsIcon,
    vueJSIcon,
  ];

  return (
    <div class="container">
      <div>
        <p class="gradient-text">About me</p>
        <h2>Hey! I'm Mark,</h2>
        <p>
          a 18 year old front-end development enthusiast with 2+ years of
          experience. I currently live and study in 's-Hertogenbosch, the
          Netherlands. Learning and working with front-end tools such as HTML,
          CSS, Javascript, and VueJS and backend technologies such as SQL and C#
          is daily business for me, but when I am not coding or shifting pixels
          around, I like to fill my free time by playing video games and
          basketball.
        </p>
        <div class="cta">
          <a class="button primary" href="/contact">
            Contact {MailIcon}
          </a>
          <a class="button" href="/contact">
            Resume <ArrowRightIcon />
          </a>
        </div>
      </div>
      <div class="technologies">
        {technologies.map((icon, index) => (
          <div
            class="icon--animation"
            style={{
              "animation-delay": `${index * 3}s`,
              "animation-duration": `${technologies.length * 3}s`,
            }}
            key={index}
          >
            <div class="icon--container">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
});
