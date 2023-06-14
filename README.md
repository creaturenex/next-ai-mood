This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## OSCAR
### Built using
- [Clerk](https://clerk.com/docs/nextjs/get-started-with-nextjs)
  - Clerk is prebuilt auth and user tracking
- [PlanetScale](https://planetscale.com/) A serverless MySql database
  - [w/Prisma](https://planetscale.com/docs/prisma/prisma-quickstart)
- [Prisma](https://www.prisma.io/docs/guides/database/planetscale)
  - Prisma has a PlanetScale tool but PlanetScale handles a PrismaClient out of the box w/out additional setup
- [Neon](https://neon.tech/) Not used but for reference a Postgres serverless database

- NextAuth.js if you wanna roll your own Auth
- [LangChain](https://js.langchain.com/docs/)
  - LangChain is a framework for developing applications powered by language models. We believe that the most powerful and differentiated applications will not only call out to a language model via an API
  - [LangChain on github](https://github.com/hwchase17/langchainjs)
- [OpenAI](https://platform.openai.com/)
- [T3](https://create.t3.gg/)
  - Typesafe next.js app builder
  - The best way to start a full-stack, typesafe Next.js app
- [Zos](https://zod.dev/)
  - tool to create a json formated schema
