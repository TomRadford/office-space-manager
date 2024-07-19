# Awesome Office Space Manager 🏢 ✨

A simple fun little CRUD app to manage offices and their staff members 🤓

## [Live Demo](https://awesomeoffices.rad.gdn/)

Check out the live demo deployed at [awesomeoffices.rad.gdn](https://awesomeoffices.rad.gdn/) 🚀

## Local Development

- cd your terminal into this directory
- Install Node 20 (if you use nvm, you can do `nvm install` / `nvm use`)
- Install pnpm `corepack enable pnpm` or check out [this](https://pnpm.io/installation) for help
- Copy `.env.example` to `.env`
- run `pnpm db:push` to init the db (you'll see a new `prisma/db.sqlite` appear)
- run `pnpm dev`
- the app should be up at `http://localhost:3000/`
- have fun! 🧑‍🍳

## Deployment

When running `pnpm build`, you might run into `Error occurred prerendering page` errors, to fix ensure that `NODE_ENV=production` - ie `NODE_ENV=production pnpm build`- more [here](https://github.com/vercel/next.js/issues/56481)

To deploy can follow deployment guides like one on [Docker](https://create.t3.gg/en/deployment/docker) for more information. Sadly, services that utilise serverless functions like Cloudflare workers/pages and Vercel wont work without some R&D due to the SQLite requirement (because you need a persistent file system in a regular Node environment)

I have the demo app deployed on a VPS using [Nixpacks](https://nixpacks.com/docs/getting-started) 👏 - nice and old-school 🤓

## Tech Stack

I used:

- React (old faithful)
- TypeScript (essential)
- NextJS (pages router) - as awesome as the Next app router looks, I wanted to focus on building instead of wrapping my head around the new paradigm of Server Components and Actions. Definitely on my todo list though!
- Tailwind to implement designs at the speed of light
- TRPC for automatic server/query client type-gen awesomeness
- TanStack Query (wrapped by TRPC) for syncing server and client state (game changer!)
- Prisma for a nice simple ORM
- SQLite for a lovely file-based db (no need to spin up a db... woohoo!)
- Zod for validation on both forms and trpc procedures
- React Form Hook for form state management and validation (its awesome)
- Radix's headless Dialog component for a semantic modal with built-in portalling.
- Ebay's Nice Modal for rendering modals (I love being able to call a modal as a function... instead of wrapping modals in conditionals in the JXS)

This project was bootstrapped with `create-t3-app` from the [T3 Stack](https://create.t3.gg/) so I could hit the ground running.

## Todo list 📝

Some nice to haves that could extend the application (and its usefulness) in the future:

- Error handling/display
- Authentication
- Multi-tenancy (so there can be many companies, each with their own offices and users, running on one instance) using something like DB sharding
- Make skeleton loaders match the UI more accurately
- Page transitions (either with Framer Motion or View Transitions api)

Thanks for having a look ✨
