import type { Config } from 'prettier';

const config: Config = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'avoid',
    singleAttributePerLine: true,
    endOfLine: 'lf',
};

export default config;
