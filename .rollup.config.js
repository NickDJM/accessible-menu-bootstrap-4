import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./rollup.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve()],
    output: [
      {
        name: "AccessibleMenuBootstrap4",
        format: "iife",
        sourcemap: true,
        file: "dist/accessible-menu-bs4.js",
      },
      {
        name: "AccessibleMenuBootstrap4",
        format: "iife",
        sourcemap: true,
        file: "dist/accessible-menu-bs4.min.js",
        plugins: [terser()],
      },
    ],
  },
];
