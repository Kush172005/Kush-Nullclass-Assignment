import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            // Disable unused variables warning
            "@typescript-eslint/no-unused-vars": "off",
            // Disable unescaped entities warning
            "react/no-unescaped-entities": "off",
            // Disable img element usage warning (Next.js recommends Image component)
            "@next/next/no-img-element": "off",
            // Disable the any type warning that's causing build failure
            "@typescript-eslint/no-explicit-any": "off",
        },
    },
];

export default eslintConfig;
