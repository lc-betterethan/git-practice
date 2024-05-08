import js from "@eslint/js";
import globals from "globals"

export default [
    js.configs.recommended,
    {
      languageOptions: {
        globals: {
          ...globals.node
        }
      }
    },

    {
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "object-curly-spacing": "error"
        }
    }
];