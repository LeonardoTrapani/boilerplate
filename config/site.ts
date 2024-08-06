import { SiteConfig } from "types"
import { absoluteUrl } from "@/lib/utils"

//TODO-INIT: change config
export const siteConfig: SiteConfig = {
  name: "Boilerplate",
  description: "Boilerplate description",
  url: "https://boilerplate.leotrapani.com",
  ogImage: absoluteUrl("/og.jpg"),
  email: "info@leotrapani.com",
  github: "https://github.com/leonardotrapani/boilerplate",
  keywords: ["boilerplate", "nextjs", "tailwindcss", "typescript"],
  author: {
    name: "Leonardo Trapani",
    email: "leonard.trapani@gmail.com",
    github: "https://github.com/leonardotrapani",
    linkedin: "https://linkedin.com/in/leonardotrapani",
  },
}
