export type Project = {
  id: number;
  name: string;
  description: string;
  year: number;
  image: `${string}.${"jpg" | "png"}`;
  websiteUrl: string;
  githubLink?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Foodz - Full stack website",
    description: `Foodz is a web app built for Horeca students at Koning Willem I College (not for use purposes), where these students can view, add, edit and delete catering events.`,
    year: 2022,
    image: "foodz.png",
    websiteUrl: "https://kw1c-schuurmansmark.github.io/ProjectThema4/",
    githubLink: "https://github.com/kw1c-SchuurmansMark/ProjectThema4",
  },
  {
    id: 2,
    name: "Dentist - Frontend website",
    description: `A small website made for patients at Tandarts Den Bosch where patients can do a self-test to receive a brush core.`,
    year: 2022,
    image: "dentist.png",
    websiteUrl: "",
  },
  {
    id: 2,
    name: "De Pettelaer - Full stack auth website",
    description: `A small website builded for members of the tennis club BTC De Pettelaer, where members can view various information about other members.`,
    year: 2022,
    image: "pettelaer.png",
    websiteUrl: "",
  },
];
