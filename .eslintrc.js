module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "react-app",
        "plugin:prettier/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            }
        ]
    }
};
