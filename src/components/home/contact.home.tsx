import { component$ } from "@builder.io/qwik";

export const ContactHome = component$(() => {
  return (
    <div class="container text-center pt-52">
      <h2 class="text-xl pb-2 font-mono gradient-text">
        Need help with a project?
      </h2>
      <p class="text-7xl font-bold">Let's talk!</p>

      <p class="text-xl pt-8 pb-8 max-w-[60ch] mx-auto text-foreground-muted">
        Got a project? Drop me a line if you want to work together on something
        exciting. Big or small. Mobile or web.
      </p>

      <a class="button primary" href="/contact">
        Contact me
      </a>
    </div>
  );
});
