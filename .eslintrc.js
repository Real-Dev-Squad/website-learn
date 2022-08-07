module.exports = {
    "root" : true,
    "extends" : [
        "plugin:vue/vue3-recommended",
        "eslint:recommended"
    ],
    "rules" : {
        "brace-style" : [ "error", "1tbs", { allowSingleLine : true } ],
        "space-in-parens" : [ "error", "always" ],
        "array-bracket-spacing" : [ "error", "always" ],
        "object-curly-spacing" : [ "error", "always" ],
        "max-len" : "off",
        "no-trailing-spaces" : "off",
        "comma-dangle" : "off",
        "prefer-destructuring" : "off",
        "no-console" : "off",
        quotes : "warn",
        "object-curly-newline" : [ "error", { ImportDeclaration : "never", ExportDeclaration : "never" } ],
        "no-unused-vars" : "off",
        "no-unused-expressions" : [ "warn" ],
        semi : "warn",
        "consistent-return" : "off",
        "no-case-declarations" : "off",
        "no-use-before-define" : [ "warn", { functions : false } ],
        "computed-property-spacing" : [ "error", "always" ],
        "template-curly-spacing" : "off",
        "key-spacing" : [ "error", { "beforeColon" : true } ],
    }
};