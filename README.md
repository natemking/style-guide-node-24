# style-guide for Node v24 projects

A TS/Eslint/Prettier style guide for Node v24 projects.

This is only a framework to bootstrap linting and code formatting. More-than-likely more work will need to be done to get this working in a codebase.

## Eslint

This is based off the new eslint flat config. Use the `eslint.config.ts` file inside the root of your project. This file utilizes many of the below packages' recommended settings as well as custom rules.

The following eslint packages & plugins need installed as dev dependencies:

-   @eslint-community/eslint-plugin-eslint-comments
-   @eslint/js
-   eslint
-   eslint-import-resolver-typescript
-   eslint-plugin-import
-   eslint-plugin-tsdoc
-   eslint-plugin-unicorn
-   jiti
-   typescript-eslint

## Prettier

Use the `prettier.config.js` & `.prettierignore` file in the root of your project.

The following Prettier packages & plugins need installed as dev dependencies:

-   prettier

## Package.json
Make sure to add `"type": "module"` to your package.json. You may need to make sure all of your config & other files are in ESM syntax.

## Typescript config

Copy the included `tsconfig.json` file into the root of your project.

<hr />

## Install cmd
```
pnpm add -D @eslint-community/eslint-plugin-eslint-comments @eslint/js eslint eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-tsdoc eslint-plugin-unicorn typescript-eslint prettier typescript @types/node jiti
```

### Troubleshooting
If after applying to your project and linting is not happening, run `npx eslint .` from the root as there may be errors. The packages installed may be different from the time this was initially setup and breaking changes could have occurred.

### Compiling
If needing to compile your node project into `.js` for production, it is recommended using the [tsup library](https://tsup.egoist.dev/) as a dev dependency. `pnpm i -D tsup`

The following `tsup.config.ts` file can be used as a boilerplate in your root dir but may need work for your project. Your entry may need changed if you are not using a `src` dir or a different entry file name:
```
import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/server.ts'],
    format: ['esm'],
    outDir: 'dist',
    clean: true,
});
```
After `tsup` is installed the following is examples of bare bones scripts that can be added to your `package.json` (note the following is based on having a `src` dir and your entry file being named`index.ts`):
```
"dev": "node --watch src/server.ts",
"build": "tsup",
"start": "node dist/server.js
```

## TODO
As of making this style guide (3/2026), `eslint-plugin-import` does not support eslint v10. Once there is support then `eslint` & `eslint/js` packages can be updated. 