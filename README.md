# Monorepo Template

This is an example for typescript based monorepo using turborepo and yarn berry PnP.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages and apps:

### Apps and Packages

- `@apps/docs`: a documentation site using [Nextra](https://nextra.site/)
- `@apps/server`: a simple [Koa](https://koajs.com/) NodeJS server including redis based rate limitter
- `@apps/web`: a [NextJS](https://nextjs.org/) web application using [TailwindCSS](https://tailwindcss.com/)
- `@packages/ui`: a stub React component library shared by both `@apps/web` and `@apps/docs` applications
- `@packages/eslint-config`: `eslint` configurations
- `@packages/tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Preparation

0. Install VSCode Extensions
  
- [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

0. run the following command:

```sh
yarn prepare
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
yarn run dev
```
