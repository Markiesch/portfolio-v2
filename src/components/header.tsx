import { component$ } from "@builder.io/qwik";
import ArrowRightIcon from "./icons/arrow-right.icon";

type Link = {
  label: string;
  href: string;
};

export default component$(() => {
  const links: Link[] = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <header class="container grid grid-cols-3 py-4 items-center">
      <a class="logo inline-block font-bold" href="/">
        Mark.
      </a>
      <ul class="flex items-center justify-center">
        {links.map((link) => (
          <li key={link.label}>
            <a class="py-2 px-4" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div class="flex justify-end">
        <a class="button" href="/contact">
          Contact
          <ArrowRightIcon />
        </a>
      </div>
    </header>
  );
});
