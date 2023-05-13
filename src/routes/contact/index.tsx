import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import styles from "../../styles/pages/_contact.scss?inline";
import axios from "axios";

export const useSendMail = routeAction$(
  async (data, requestEvent) => {
    const apiKey = requestEvent.env.get("MAIL_API_KEY");

    try {
      await axios.post(
        "https://api.sendgrid.com/v3/mail/send",
        {
          personalizations: [
            {
              to: [{ email: "marksmeel@gmail.com" }],
              dynamic_template_data: data,
            },
          ],
          template_id: "d-43d68e6d36a84bdd84f95f78e992af25",
          from: { email: "markschuurmans.nl@gmail.com" },
          subject: "Form submission",
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      return {
        success: false,
      };
    }

    return {
      success: true,
    };
  },
  zod$({
    name: z.string().min(1, "Name is required"),
    email: z.string().email(),
    message: z.string().min(20, "Message must contain atleast 20 characters"),
  })
);

export default component$(() => {
  useStylesScoped$(styles);
  const action = useSendMail();

  return (
    <>
      <section class="hero">
        <div class="container">
          <h1 class="gradient-text">Contact me</h1>
          <p>
            Got a project? Drop me a line if you want to work together on
            something exciting. Big or small. Mobile or web.
          </p>
        </div>
      </section>
      <section class="contact--section container">
        <Form action={action}>
          <h2>Quick contact</h2>

          <label for="name">Name</label>
          <input name="name" id="name" type="text" />
          <p class="error-message">{action.value?.fieldErrors?.name}</p>

          <label for="email">Email</label>
          <input name="email" id="email" type="text" />
          <p class="error-message">{action.value?.fieldErrors?.email}</p>

          <label for="message">Message</label>
          <textarea name="message" id="message" />
          <p class="error-message">{action.value?.fieldErrors?.message}</p>

          <button type="submit" class="button primary">
            Send
          </button>
        </Form>
        <div>
          <p style="color: white">{action.value?.toString()}</p>

          <p>
            {action.value?.failed && (
              <span>{action.value.fieldErrors?.message}</span>
            )}
          </p>
        </div>
      </section>
    </>
  );
});
