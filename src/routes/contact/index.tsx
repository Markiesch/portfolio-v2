import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "../../styles/pages/_contact.scss?inline";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { createTransport } from "nodemailer";

export const useSendMail = routeAction$(
  async (data, requestEvent) => {
    console.log(data);

    console.log(requestEvent.env.get("MAIL_SERVICE"));
    console.log(requestEvent.env.get("MAIL_USER"));
    console.log(requestEvent.env.get("MAIL_PASSWORD"));

    const transporter = createTransport({
      service: requestEvent.env.get("MAIL_SERVICE"),
      auth: {
        user: requestEvent.env.get("MAIL_USER"),
        pass: requestEvent.env.get("MAIL_PASSWORD"),
      },
    });

    const info = await transporter.sendMail({
      to: requestEvent.env.get("MAIL_TO"),
      subject: `Email submission markschuurmans.nl`,
      html: `
        <html lang="en">
          <head>
            <title>Email submission</title>
            <style>*{margin:0}</style>
          </head>
          <body style="background-color: #fafafa; padding: 3rem 5rem;">
            <div style="padding: 1.5rem; background: white">
              <svg style="width: 3rem" viewBox="0,0,400,400"><path d="M260.881 72.516 C 250.525 93.531,242.051 112.199,242.051 114.003 C 242.051 117.628,357.186 348.718,358.992 348.718 C 359.614 348.718,368.712 331.334,379.210 310.086 L 398.299 271.455 339.005 152.882 L 279.712 34.309 260.881 72.516 M101.806 75.362 L 82.565 113.802 141.282 231.260 C 173.577 295.862,200.481 348.718,201.069 348.718 C 201.657 348.718,210.754 331.409,221.285 310.253 L 240.432 271.789 228.217 247.176 C 181.768 153.586,122.847 36.923,122.028 36.923 C 121.488 36.923,112.388 54.221,101.806 75.362 M22.882 233.174 L 3.764 271.477 22.846 310.097 C 33.342 331.339,42.444 348.718,43.073 348.718 C 43.702 348.718,52.780 331.410,63.245 310.256 L 82.274 271.795 63.278 233.333 C 52.831 212.179,43.769 194.872,43.141 194.872 C 42.514 194.872,33.397 212.108,22.882 233.174"></path></svg>
              <p style="padding: 1.5rem 0 1rem 0; font-weight: bold;">email from ${data.name},</p>
              <div style="color: rgba(0,0,0,0.87)">
                <p>${data.message}</p>
                <p style="padding-top: 1.5rem; font-style: italic;">email: ${data.email},</p>          
              </div>
            </div>
          </body>
        </html>`,
    });

    return {
      success: true,
      info,
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
