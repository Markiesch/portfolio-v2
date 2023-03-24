import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../styles/contact.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <section class="hero">
        <h1 class="gradient-text">Contact me</h1>
        <p>
          Got a project? Drop me a line if you want to work together on
          something exciting. Big or small. Mobile or web.
        </p>
      </section>
      <section class="contact--section container">
        <form>
          <h2>Quick contact</h2>

          <label for="name">Name</label>
          <input id="name" type="text" />

          <label for="email">Email</label>
          <input id="email" type="text" />

          <label for="message">Message</label>
          <input id="message" type="text" />
        </form>
        <div>
          <p></p>
        </div>
      </section>
    </>
  );
});
