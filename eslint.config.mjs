import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "screenshots/**",
      "next-env.d.ts"
    ]
  }
];

export default eslintConfig;
