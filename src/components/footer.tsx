import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../styles/layout/_footer.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="wrapper">
      <footer class="container">
        <p>&copy; 2023 Mark Schuurmans</p>
      </footer>
    </div>
  );
});
