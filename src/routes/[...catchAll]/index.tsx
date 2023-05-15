import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center min-h-[60vh]">
      <span class="text-lg mb-4">Something went wrong...</span>
      <h1 class="text-5xl font-bold">Oops! We couldn't find that page.</h1>
      <p class="underline text-xl pt-4 pb-8">
        Maybe you can find what you need here?
      </p>
      <div class="flex">
        <a class="button" href="/">
          Home
        </a>
        <a class="ml-2 button" href="/portfolio">
          Projects
        </a>
        <a class="ml-2 button" href="/contact">
          Contact
        </a>
      </div>
    </div>
  );
});
