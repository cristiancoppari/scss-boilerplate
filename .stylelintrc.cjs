const propertyGroups = require("stylelint-config-recess-order/groups");

const config = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recess-order",
    ],
    rules: {
        "declaration-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: [
                    "after-declaration",
                    "after-comment",
                    "inside-single-line-block",
                ],
                severity: "warning",
            },
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                ignore: [
                    "first-nested",
                    "blockless-after-same-name-blockless",
                    "after-comment",
                ],
                severity: "warning",
            },
        ],
        // "order/order": [
        //     [
        //         { type: "at-rule", name: "import" },
        //         { type: "at-rule", name: "forward" },
        //         { type: "at-rule", name: "use" },
        //         "dollar-variables",
        //         "at-variables",
        //         "custom-properties",
        //         { type: "at-rule", name: "function" },
        //         { type: "at-rule", name: "mixin" },
        //         { type: "at-rule", name: "extend" },
        //         { type: "at-rule", name: "include" },
        //         { type: "at-rule", name: "custom-media" },
        //         "declarations",
        //         {
        //             type: "rule",
        //             selector: /^&::[\w-]+/,
        //             hasBlock: true,
        //         },
        //         "rules",
        //         { type: "at-rule", name: "media", hasBlock: true },
        //     ],
        //     {
        //         severity: "warning",
        //     },
        // ],
        "order/properties-order": propertyGroups.map((group) => ({
            ...group,
            emptyLineBefore: "always",
            noEmptyLineBetween: true,
        })),
    },
};

module.exports = config;
