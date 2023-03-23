import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() =>
  (
    <QwikCityProvider>
      <head>
        <title>Mark Schuurmans - Portfolio</title>
        <meta name="author" content="Mark Schuurmans"/>
        <meta name="description" content="I design and develop beautiful responsive websites"/>
        <meta name="keywords"
              content="web, website, responsive, developer, frontend, backend, portfolio, projects, vuejs, vue, desktop, mobile, tablet"/>

        <meta name="og:title" content="Portfolio - Mark Schuurmans"/>
        <meta name="og:type" content="website"/>
        <meta name="og:url" content="https://www.markschuurmans.nl"/>
        <meta name="og:image" content="/assets/mockups/home-page.png"/>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta charSet="utf-8"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        <RouterHead/>
      </head>
      <body lang="en">
      <RouterOutlet/>
      <ServiceWorkerRegister/>
      </body>
    </QwikCityProvider>
  ));
