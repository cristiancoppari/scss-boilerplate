module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["prettier"],
    rules: {
        "import/order": [
            "warn",
            {
                groups: [
                    "type",
                    "builtin",
                    "object",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
                pathGroups: [
                    {
                        pattern: "~/**",
                        group: "external",
                        position: "after",
                    },
                ],
                "newlines-between": "always",
            },
        ],
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
    },
};
