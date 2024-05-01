# Awesome Office Space Manager 🏢 ✨

A simple fun little CRUD app to manage offices and their staff members 🤓

## Local Development

- cd your terminal into this directory
- Install Node 20 (if you use nvm, you can do `nvm use`)
- Install pnpm `corepack enable pnpm` or check out [this](https://pnpm.io/installation) for help
- Copy `.env.example` to `.env`
- run `pnpm db:push` to init the db (you'll see a new `prisma/db.sqlite` appear)
- run `pnpm dev`
- the app should be up at `http://localhost:3000/`
- have fun! 🧑‍🍳

## Deployment

You can also deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Tech Stack

I used:

- React (old faithful)
- TypeScript (essential)
- NextJS (pages router) - as awesome as the Next app router looks, I wanted to focus on building instead of wrapping my head around the new paradigm of Server Components and Actions. Definitely on my todo list though!
- Tailwind to implement designs at the speed of light
- TRPC for automatic query client type-gen awesomeness
- Prisma for a nice simple ORM
- SQLite for a lovely file-based db (no need to spin up a db... woohoo!)
- Zod for validation on both forms and trpc procedures
- React Form Hook for form state management and validation (its awesome)
- Radix's headless Dialog component for a semantic modal with build-in portalling.
- Ebay's Nice Modal for rendering modals (I love being able to call a modal as a function... instead of wrapping modals in conditionals in the markup)

This project was bootstrapped with `create-t3-app` from the [T3 Stack](https://create.t3.gg/) so I could hit the ground running.
