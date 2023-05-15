import { component$ } from "@builder.io/qwik";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import axios from "axios";
import { GithubIcon } from "~/components/icons/github.icon";
import { LinkedinIcon } from "~/components/icons/linkedin.icon";
import { MailIcon } from "~/components/icons/mail.icon";

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

type InputField = {
  label: string;
  name: string;
  type: "input" | "textarea";
};

export default component$(() => {
  const action = useSendMail();

  const inputFields = [
    { label: "Name", name: "name", type: "input" },
    { label: "Email", name: "email", type: "input" },
    { label: "Message", name: "message", type: "textarea" },
  ] as const satisfies ReadonlyArray<InputField>;

  return (
    <>
      <section class="text-center bg-gradient-to-t from-background-accent py-20 border-b border-divider">
        <h1 class="text-6xl font-bold gradient-text pb-4">Contact me</h1>
        <p class="text-foreground-muted max-w-[60ch] mx-auto">
          Got a project? Drop me a line if you want to work together on
          something exciting. Big or small. Mobile or web.
        </p>
      </section>
      <section class="grid grid-cols-1 md:grid-cols-2 pt-20 container">
        <Form class="max-w-lg" action={action}>
          {inputFields.map((inputField) => (
            <>
              <label
                class="cursor-pointer mb-1 mt-6 font-medium inline-block"
                for={inputField.name}
              >
                {inputField.label}
              </label>
              <inputField.type
                class="resize-none w-full py-2 px-4 rounded bg-white/10"
                name={inputField.name}
                id={inputField.name}
                type="text"
              />
              <p class="error-message">
                {action.value?.fieldErrors?.[inputField.name]}
              </p>
            </>
          ))}
          <button type="submit" class="mt-6 button primary">
            Send
          </button>
        </Form>
        <div class="relative border-l border-divider flex flex-col justify-center  px-20 overflow-hidden">
          <div class="absolute pointer-events-none -translate-x-1/2 left-0 -top-20 right-0 -bottom-20 bg-[radial-gradient(_var(--tw-gradient-stops))] from-background-accent to-60%"></div>

          <a
            class="flex items-center font-medium text-foreground-muted py-2 px-4 rounded border border-divider"
            href="mailto:marksmeel@gmail.com"
          >
            <MailIcon class="w-4 mr-4" /> marksmeel@gmail.com
          </a>
          <a
            class="flex items-center font-medium text-foreground-muted mt-4 py-2 px-4 rounded border border-divider"
            href="https://github.com/Markiesch"
            target="_blank"
          >
            <GithubIcon class="w-4 mr-4" /> Github
          </a>
          <a
            class="flex items-center font-medium text-foreground-muted mt-4 py-2 px-4 rounded border border-divider"
            href="https://www.linkedin.com/in/mark-schuurmans-30329a1b7/"
            target="_blank"
          >
            <LinkedinIcon class="w-4 mr-4" /> LinkedIn
          </a>
        </div>
      </section>
    </>
  );
});
