'use strict';
/*
 * ESLINT Configuration file
 */

module.exports = {
    env: {
        browser: true, // Allows browser's global vars
        es2021: true // Force clients supports es2021 as a requirement
        //node: true, // Allows require() and process //@TODO: Erreur ici car cette entr�e de configuration n'existe plus
    },
    extends: [
        "eslint:recommended", // Base ESLINT
        //@TODO:VERIF "plugin:sonarjs/recommended", // Rules from SonarQube
        "plugin:@typescript-eslint/recommended",
        //@TODO:VERIF "plugin:@typescript-eslint/recommended-requiring-type-checking", // Rules for TS with type checking
        "plugin:react/recommended", // Rules for React
        "plugin:react-form-fields/recommended",
        "plugin:react-hook-form/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended", // Rules for a11y (accessibility)
        "plugin:react/jsx-runtime", //disallow 'import React' old needs (prior to react 17)
        "plugin:compat/recommended"


    ],
    // Overrides ESLint rules for specific files
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",//6, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        project: "./tsconfig.json", // Set tsconfig for rules requiring type checking
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: [
        "sonarjs"
    ],
    // Customize ESLint rules
    // Can be used to overwrite rules specified from the extended configs
    rules: {
        "curly": "error", // Equivalent = S121
        "no-useless-concat": "error", // Equivalent = S1440
        "eqeqeq": "error", // Equivalent = S1440
        "semi": "error", // Equivalent � S1438
        "max-lines-per-function": ["error", 250], // Equivalent � S3512
        "prefer-template": "warn", // Equivalent � S3512
        "object-shorthand": "warn", // Equivalent � S3498
        "no-duplicate-imports": "warn", // Equivalent � S2933
        "@typescript-eslint/prefer-for-of": "warn", // Equivalent � S4138
        "@typescript-eslint/prefer-readonly": "warn", // Equivalent � S3863

        // Configuration des r�gles SonarQube
        "sonarjs/cognitive-complexity": ["error", 60], // S3776 personnalis�
        "sonarjs/no-duplicate-string": "off", // S1192 d�sactiv�
        "sonarjs/no-nested-template-literals": "off", // S4624 d�sactiv�

        // no-shadow: Desactivation de la regle de base et configuration de celle TS (Equivalent = S1117)
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],

        // no-unused-vars: Desactivation de la regle de base et configuration de celle TS
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "none", // Ignorer les arguments de fonction non utilis�
                "ignoreRestSiblings": true // Ignorer les variables de l'op�rateur Rest ex: var { value, ...others } = data;
            }
        ],

        // D�sactivation du check des promesses
        "@typescript-eslint/no-floating-promises": "off",

        // no-use-before-define: Desactivation de la regle de base et configuration de celle TS
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                "functions": false, // Ignorer les fonctions utilis�es avant d'�tre d�clar�es
            }
        ],

        // D�sactivation de display-name obligatoire
        "react/display-name": "off",

        "@typescript-eslint/naming-convention": [
            "error",
            // Force les interfaces � �tre prefix� par I
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "prefix": ["I"]
            }
        ],

        // Configuration des types de retours explicites pour autoriser les fat-arrow
        "@typescript-eslint/explicit-function-return-type": [
            "warn",
            {
                "allowExpressions": true,
                "allowTypedFunctionExpressions": true,
                "allowHigherOrderFunctions": true,
            }
        ],

        // Autorise l'utilisation de require()
        "@typescript-eslint/no-var-requires": "off",
        // D�sactive l'obligation de mettre des string dans des chaines lit�rales (`${arg}`)
        "@typescript-eslint/restrict-template-expressions": "off",
        // D�sactive l'obligation d'avoir du camelCase dans les noms
        "@typescript-eslint/camelcase": "off",
        // D�sactive l'interdication des interfaces vides
        "@typescript-eslint/no-empty-interface": "off",
        // D�sactive l'interdication des any
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        // D�sactive l'interdication de d�finir les types "�vidents" (let s: string = "test";)
        "@typescript-eslint/no-inferrable-types": "off",
        // D�sactive l'interdiction d'utiliser des namespaces
        "@typescript-eslint/no-namespace": "off",
        // D�sactive l'obligation d'utiliser exec() au lieu de match()
        "@typescript-eslint/prefer-regexp-exec": "off",
        // D�sactive le check de fonction vide
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        // V�rifie les m�thodes unbound
        "@typescript-eslint/unbound-method": [
            "error",
            {
                "ignoreStatic": true,
            }
        ],
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        polyfills: [
            "fetch",
            "Promise",
            "WebAssembly.compile",
            "Array.prototype.push",
            "Array.prototype.includes"
        ] //@TODO : voir si l'on g�n�re des polyfills. Code ici � titre d'exemple
    }
};
