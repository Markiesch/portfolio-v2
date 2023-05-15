import type { JSXChildren } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";
import { typescriptIcon } from "~/components/icons/typescript.icon";
import { javaIcon } from "~/components/icons/java.icon";
import { nestjsIcon } from "~/components/icons/nestjs.icon";
import { vueJSIcon } from "~/components/icons/vuejs.icon";
import { MailIcon } from "~/components/icons/mail.icon";

export default component$(() => {
  const technologies: JSXChildren[] = [
    typescriptIcon,
    javaIcon,
    nestjsIcon,
    vueJSIcon,
  ];

  return (
    <div class="container grid grid-cols-2">
      <div>
        <p class="font-mono text-lg gradient-text">About me</p>
        <h2 class="text-4xl pb-4 pt-2 font-semibold">Hey! I'm Mark,</h2>
        <p class="text-foreground-muted max-w-[80ch]">
          a 18 year old front-end development enthusiast with 2+ years of
          experience. I currently live and study in 's-Hertogenbosch, the
          Netherlands. Learning and working with front-end tools such as HTML,
          CSS, Javascript, and VueJS and backend technologies such as SQL and C#
          is daily business for me, but when I am not coding or shifting pixels
          around, I like to fill my free time by playing video games and
          basketball.
        </p>
        <div class="pt-8">
          <a class="button primary mr-2" href="/contact">
            Contact <MailIcon class="w-4" />
          </a>
          <a class="button" href="/contact">
            Resume <ArrowRightIcon />
          </a>
        </div>
      </div>
      <div class="h-min technologies grid grid-cols-4 divide-x divide-divider divide-y-reverse">
        {technologies.map((icon, index) => (
          <div key={index}>
            <div class="py-4 w-1/3 mx-auto opacity-60">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
});
