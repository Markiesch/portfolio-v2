import { component$ } from "@builder.io/qwik";
import ArrowRightIcon from "~/components/icons/arrow-right.icon";
import { MailIcon } from "~/components/icons/mail.icon";

export default component$(() => {
  return (
    <div class="min-h-[80vh] flex items-center py-10 mb-20 border-b border-divider bg-gradient-to-t from-background-accent">
      <div class="container text-center">
        <span class="font-mono inline-block pb-4 text-lg gradient-text">
          Design. Build. Improve.
        </span>
        <h1 class="text-7xl max-w-[16ch] mx-auto font-bold gradient-text">
          I build websites your users will love
        </h1>
        <p class="text-lg max-w-[60ch] mx-auto py-8 text-foreground-muted">
          Hi I am Mark, a Software Developer with an eye for UI design. I am
          specialized in UI/UX design and responsive web development.
        </p>

        <div class="flex justify-center">
          <a href="/projects" class="button primary mr-2">
            <span>View projects</span> <ArrowRightIcon />
          </a>
          <a href="/contact" class="button">
            <MailIcon class="w-4" /> <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
});
