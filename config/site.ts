import { SiteConfig } from "types"
import { absoluteUrl } from "@/lib/utils"

//TODO-INIT: change config
export const siteConfig: SiteConfig = {
  name: "The Closer Fit",
  description: "TODO-INIT: change description",
  url: "https://thecloserfit.com",
  ogImage: absoluteUrl("/og.jpg"),
  email: "info@thecloserfit.com",
  github: "https://github.com/leonardotrapani/thecloserfit",
  keywords: [],
  author: {
    name: "Leonardo Trapani",
    email: "leonard.trapani@gmail.com",
    github: "https://github.com/leonardotrapani",
    linkedin: "https://linkedin.com/in/leonardotrapani",
  },
}
