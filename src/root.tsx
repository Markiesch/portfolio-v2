import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "./styles/base/_reset.scss";
import "./styles/base/_utils.scss";

export default component$(() => (
  <QwikCityProvider>
    <head>
      <QwikPartytown forward={["gtag", "dataLayer.push"]} />
      <script
        async
        type="text/partytown"
        src="https://www.googletagmanager.com/gtag/js?id=G-RJ40M1T28M"
      />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RJ40M1T28M');`}
      />

      <title>Mark Schuurmans - Portfolio</title>
      <meta name="author" content="Mark Schuurmans" />
      <meta
        name="description"
        content="I design and develop beautiful responsive websites"
      />
      <meta
        name="keywords"
        content="web, website, responsive, developer, frontend, backend, portfolio, projects, vuejs, vue, desktop, mobile, tablet"
      />

      <meta name="og:title" content="Portfolio - Mark Schuurmans" />
      <meta name="og:type" content="website" />
      <meta name="og:url" content="https://www.markschuurmans.nl" />
      <meta name="og:image" content="/assets/mockups/home-page.png" />

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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      />

      <meta charSet="utf-8" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <RouterHead />
    </head>
    <body lang="en">
      <RouterOutlet />
      <ServiceWorkerRegister />
    </body>
  </QwikCityProvider>
));
