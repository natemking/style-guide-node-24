import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import commentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-import';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import unicornPlugin from 'eslint-plugin-unicorn';

export default defineConfig([
    globalIgnores([
        'dist/**',
        'build/**',
        'node_modules/**',
        '.husky/**',
        '.vscode/**',
        '**/*.d.ts',
        'coverage/**',
    ]),
    {
        files: ['**/*.{js,cjs,mjs,ts,cts,mts}'],
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
            tseslint.configs.strictTypeChecked,
            tseslint.configs.stylisticTypeChecked,
        ],
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                projectService: true,
            },
        },
        settings: {
            /** Resolver for typescript and node imports */
            'import/resolver': {
                typescript: {
                    project: './tsconfig.json',
                },
                node: true,
            },
        },
        plugins: {
            '@eslint-community/eslint-comments': commentsPlugin,
            import: importPlugin,
            tsdoc: tsdocPlugin,
            unicorn: unicornPlugin,
        },
        rules: {
            /** BEST PRACTICES */
            /** Require return statements in array methods callbacks. */
            'array-callback-return': ['error', { allowImplicit: true }],
            /** Treat `var` statements as if they were block scoped. */
            'block-scoped-var': 'error',
            /** Require curly braces for multiline blocks. */
            curly: ['warn', 'multi-line'],
            /** Require default clauses in switch statements to be last (if used). */
            'default-case-last': 'error',
            /** Require triple equals (`===` and `!==`). */
            eqeqeq: 'error',
            /** Require grouped accessor pairs in object literals and classes. */
            'grouped-accessor-pairs': 'error',
            /** Disallow use of `alert()`. */
            'no-alert': 'error',
            /** Disallow use of `caller`/`callee`. */
            'no-caller': 'error',
            /** Disallow returning value in constructor. */
            'no-constructor-return': 'error',
            /** Disallow using an `else` if the `if` block contains a return. */
            'no-else-return': 'warn',
            /** Disallow `eval()`. */
            'no-eval': 'error',
            /** Disallow extending native objects. */
            'no-extend-native': 'error',
            /** Disallow unnecessary function binding. */
            'no-extra-bind': 'error',
            /** Disallow unnecessary labels. */
            'no-extra-label': 'error',
            /** Disallow floating decimals. */
            'no-floating-decimal': 'error',
            /** Make people convert types explicitly e.g. `Boolean(foo)` instead of `!!foo`. */
            'no-implicit-coercion': 'error',
            /** Disallow use of `eval()`-like methods. */
            'no-implied-eval': 'error',
            /** Disallow usage of `__iterator__` property. */
            'no-iterator': 'error',
            /** Disallow use of labels for anything other than loops and switches. */
            'no-labels': 'error',
            /** Disallow unnecessary nested blocks. */
            'no-lone-blocks': 'error',
            /** Disallow `new` for side effects. */
            'no-new': 'error',
            /** Disallow function constructors. */
            'no-new-func': 'error',
            /** Disallow primitive wrapper instances, such as `new String('foo')`. */
            'no-new-wrappers': 'error',
            /** Disallow use of octal escape sequences in string literals. */
            'no-octal-escape': 'error',
            /** Disallow reassignment of function parameters. */
            'no-param-reassign': 'error',
            /** Disallow usage of the deprecated `__proto__` property. */
            'no-proto': 'error',
            /** Disallow Node.js CommonJS globals that are not available in ESM scope. */
            'no-restricted-globals': [
                'error',
                {
                    name: '__dirname',
                    message: 'Use `import.meta.dirname` instead.',
                },
                {
                    name: '__filename',
                    message: 'Use `import.meta.filename` instead.',
                },
            ],
            /** Disallow assignment in `return` statement. */
            'no-return-assign': 'error',
            /** Disallow use of `javascript:` urls. */
            'no-script-url': 'error',
            /** Disallow comparisons where both sides are exactly the same. */
            'no-self-compare': 'error',
            /** Disallow use of comma operator. */
            'no-sequences': 'error',
            /** Disallow unnecessary `.call()` and `.apply()`. */
            'no-useless-call': 'error',
            /** Disallow unnecessary concatenation of strings. */
            'no-useless-concat': 'error',
            /** Disallow redundant return statements. */
            'no-useless-return': 'warn',
            /** Require using named capture groups in regular expressions. */
            'prefer-named-capture-group': 'error',
            /** Require using Error objects as Promise rejection reasons. */
            'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
            /** Disallow use of the RegExp constructor in favor of regular expression literals. */
            'prefer-regex-literals': 'error',
            /** Disallow "Yoda conditions", ensuring the comparison. */
            yoda: 'warn',

            /** COMMENTS */
            /** Require comments on ESLint disable directives. */
            '@eslint-community/eslint-comments/require-description': 'error',

            /** ES6 */
            /** Disallow useless computed property keys. */
            'no-useless-computed-key': 'warn',
            /** Disallow renaming imports, exports, and destructured assignments to the same name. */
            'no-useless-rename': 'warn',
            /** Require `let` or `const` instead of `var`. */
            'no-var': 'error',
            /** Require object literal shorthand syntax. */
            'object-shorthand': 'warn',
            /** Require default to `const` instead of `let`. */
            'prefer-const': 'warn',
            /** Disallow parseInt() in favor of binary, octal, and hexadecimal literals. */
            'prefer-numeric-literals': 'error',
            /** Require using rest parameters instead of `arguments`. */
            'prefer-rest-params': 'error',
            /** Require using spread syntax instead of `.apply()`. */
            'prefer-spread': 'error',
            /** Require using template literals instead of string concatenation. */
            'prefer-template': 'warn',
            /** Require a `Symbol` description. */
            'symbol-description': 'error',

            /** IMPORT */
            /** Disallow non-import statements appearing before import statements. */
            'import/first': 'error',
            /** Require a newline after the last import/require. */
            'import/newline-after-import': 'warn',
            /** Disallow import of modules using absolute paths. */
            'import/no-absolute-path': 'error',
            /** Disallow cyclical dependencies between modules. */
            'import/no-cycle': 'error',
            /** Disallow default exports. */
            'import/no-default-export': 'error',
            /** Disallow the use of extraneous packages. */
            'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
            /** Disallow mutable exports. */
            'import/no-mutable-exports': 'error',
            /** Disallow importing packages through relative paths. */
            'import/no-relative-packages': 'warn',
            /** Disallow a module from importing itself. */
            'import/no-self-import': 'error',
            /** Ensures that there are no useless path segments. */
            'import/no-useless-path-segments': 'error',
            /** Enforce a module import order convention. */
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin', // Node.js built-in modules
                        'external', // Packages
                        'internal', // Aliased modules
                        'parent', // Relative parent
                        'sibling', // Relative sibling
                        'index', // Relative index
                    ],
                    'newlines-between': 'never',
                },
            ],
            /** Enabled by import/recommended, but better handled by TS & typescript-eslint. */
            'import/default': 'off',
            'import/export': 'off',
            'import/namespace': 'off',
            'import/no-unresolved': 'off',

            /** POSSIBLE ERRORS */
            /** Disallow the use of certain consoles. */
            'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
            /** Disallow expressions where the operation doesn't affect the value. */
            'no-constant-binary-expression': 'error',
            /** Disallow returning values from Promise executor functions. */
            'no-promise-executor-return': 'error',
            /** Disallow template placeholders in strings; likely errors. */
            'no-template-curly-in-string': 'error',
            /** Disallow loops with a body that allows only one iteration. */
            'no-unreachable-loop': 'error',

            /** STYLISTIC */
            /** Require camel case names. */
            camelcase: [
                'error',
                { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
            ],
            /** Require function expressions to have a name. */
            'func-names': ['error', 'as-needed'],
            /** Require a capital letter for constructors. */
            'new-cap': ['error', { capIsNew: false }],
            /** Disallow omitting parentheses in empty constructor calls. */
            'new-parens': 'warn',
            /** Disallow use of the Array constructor. */
            'no-array-constructor': 'error',
            /** Disallow use of bitwise operators. */
            'no-bitwise': 'error',
            /** Disallow if as the only statement in an else block. */
            'no-lonely-if': 'warn',
            /** Disallow use of chained assignment expressions. */
            'no-multi-assign': 'error',
            /** Disallow nested ternary expressions. */
            'no-nested-ternary': 'error',
            /** Disallow ternary operators when simpler alternatives exist. */
            'no-unneeded-ternary': 'error',
            /** Require use of an object spread over Object.assign. */
            'prefer-object-spread': 'warn',
            /** Require single quotes. */
            quotes: ['error', 'single', { avoidEscape: true }],

            /** TYPESCRIPT */
            /** Require types definitions be types only. */
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
            /** Require consistent usage of type exports. */
            '@typescript-eslint/consistent-type-exports': [
                'warn',
                { fixMixedExportsWithInlineTypeSpecifier: true },
            ],
            /** Require consistent usage of type imports. */
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                {
                    disallowTypeAnnotations: true,
                    fixStyle: 'separate-type-imports',
                    prefer: 'type-imports',
                },
            ],
            /** Require explicit return types on functions and class methods. */
            '@typescript-eslint/explicit-function-return-type': [
                'warn',
                { allowExpressions: true },
            ],
            /** Require using function property types in method signatures. */
            '@typescript-eslint/method-signature-style': 'warn',
            /** Require consistent naming for better IntelliSense and to avoid collisions. */
            '@typescript-eslint/naming-convention': [
                'error',
                // Anything type-like should be written in PascalCase.
                {
                    format: ['PascalCase'],
                    selector: ['typeLike', 'enumMember'],
                },
                // Types cannot be prefixed with `T`, `I`, or use restricted names.
                {
                    custom: {
                        match: false,
                        regex: '^T[A-Z]|^I[A-Z]|^(Interface|Props|State)$',
                    },
                    format: ['PascalCase'],
                    selector: ['typeAlias', 'interface'],
                },
            ],
            /** Disallow floating promises — unhandled rejections will crash the Node process. */
            '@typescript-eslint/no-floating-promises': 'error',
            /** Disallow members of unions and intersections that do nothing or override type information. */
            '@typescript-eslint/no-redundant-type-constituents': 'warn',
            /** Disallow unnecessary namespace qualifiers. */
            '@typescript-eslint/no-unnecessary-qualifier': 'warn',
            /** Require using `RegExp.exec()` over `String.match()` for consistency. */
            '@typescript-eslint/prefer-regexp-exec': 'warn',
            /** Require Array#sort calls to provide a compare function. */
            '@typescript-eslint/require-array-sort-compare': [
                'error',
                { ignoreStringArrays: true },
            ],
            /** Require exhaustive checks when using union types in switch statements. */
            '@typescript-eslint/switch-exhaustiveness-check': [
                'error',
                { considerDefaultExhaustiveForUnions: true },
            ],
            /** Require default parameters to be last. */
            '@typescript-eslint/default-param-last': 'error',
            /** Disallow creation of functions within loops. */
            '@typescript-eslint/no-loop-func': 'error',
            /** Disallow variable shadowing outer scope variables. */
            '@typescript-eslint/no-shadow': 'error',
            /** Disallow unused variables. */
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    // Args & caught errors prefixed with `_`, or named `name`, `err`, `error`
                    args: 'all',
                    argsIgnorePattern: '^_|^name$',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_|^err$|^error$',
                    // Unused destructured array elements prefixed with `_`
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    // Allows ignoring unused rest properties in object destructuring
                    ignoreRestSiblings: true,
                },
            ],
            /** Disallow unnecessary constructors. */
            '@typescript-eslint/no-useless-constructor': 'error',
            /** Disallow certain values in template expressions. */
            '@typescript-eslint/restrict-template-expressions': [
                'error',
                {
                    allowAny: false,
                    allowBoolean: false,
                    allowNullish: false,
                    allowNumber: true,
                    allowRegExp: false,
                    allowNever: true,
                },
            ],

            /** TSDOC */
            /** Require TSDoc comments conform to the TSDoc specification. */
            'tsdoc/syntax': 'error',

            /** UNICORN */
            /** Require an error message when throwing an error. */
            'unicorn/error-message': 'error',
            /** Prefer for…of over the forEach method. */
            'unicorn/no-array-for-each': 'error',
            /** Disallow unnecessary spread. */
            'unicorn/no-useless-spread': 'error',
            /** Enforce proper case for numeric literals. */
            'unicorn/number-literal-case': 'error',
            /** Prefer .find(…) and .findLast(…) over the first or last element from .filter(…). */
            'unicorn/prefer-array-find': 'error',
            /** Enforces the use of event.key over event.keyCode which is deprecated. */
            'unicorn/prefer-keyboard-event-key': 'error',
            /** Require ESM syntax over CommonJS `require()`, `module.exports`, and `exports`. */
            'unicorn/prefer-module': 'error',
            /** Require using the `node:` protocol when importing Node.js built-in modules. */
            'unicorn/prefer-node-protocol': 'warn',
            /** Require using Error objects as Promise rejection reasons. */
            '@typescript-eslint/prefer-promise-reject-errors': [
                'error',
                { allowEmptyReject: true },
            ],
            /** Enforces the use of the spread operator (...) over outdated patterns. */
            'unicorn/prefer-spread': 'off',
            /** Prefer ternary expressions over simple if-else statements. */
            'unicorn/prefer-ternary': 'error',
            /** Require ESM syntax over CommonJS `require()`, `module.exports`, and `exports`. */
            'unicorn/prefer-top-level-await': 'warn',
            /** Enforce using the separator argument with Array#join(). */
            'unicorn/require-array-join-separator': 'error',
            /** Require new when creating an error. */
            'unicorn/throw-new-error': 'error',

            /** VARIABLES */
            /** Disallow labels that share a name with a variable. */
            'no-label-var': 'error',
            /** Disallow initializing variables to `undefined`. */
            'no-undef-init': 'warn',
        },
    },
    {
        /** Require consistent filename case for all js/ts files. */
        files: ['**/*.{js,ts,cjs,cts,mjs,mts}'],
        rules: {
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        kebabCase: true,
                    },
                },
            ],
        },
    },
    {
        /** Allow default exports in config files. */
        files: ['**/*.config.{js,ts,cjs,cts,mjs,mts}'],
        rules: {
            'import/no-default-export': 'off',
        },
    },
    /**
     * Prevent TS linting on certain config files -
     * https://typescript-eslint.io/users/configs/#disable-type-checked
     */
    {
        files: ['**/*.config.{js,mjs,cjs,ts}'],
        extends: [tseslint.configs.disableTypeChecked],
    },
]);
