export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "with Shadcnui",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Users",
      href: "/users",
    },
  ],
  links: {
    github: "https://github.com/default-sameer/next-with-shadcnui",
  },
}
