module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": [
            "error", {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ],
        "no-duplicate-imports": "error",
        "no-use-before-define": [
            "error", { 
                "functions": true,
                "classes": true
            }
        ]
    }
};
