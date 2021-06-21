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
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
      },
      {
        name: "AccessibleMenuBootstrap4",
        format: "iife",
        sourcemap: true,
        file: "dist/accessible-menu-bs4.min.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
        plugins: [terser()],
      },
    ],
  },
  {
    input: "./src/bootstrap4DisclosureMenu.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve()],
    output: [
      {
        name: "Bootstrap4DisclosureMenu",
        format: "iife",
        sourcemap: true,
        file: "dist/disclosure-menu-bs4.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
      },
      {
        name: "Bootstrap4DisclosureMenu",
        format: "iife",
        sourcemap: true,
        file: "dist/disclosure-menu-bs4.min.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
        plugins: [terser()],
      },
      {
        name: "Bootstrap4DisclosureMenu",
        format: "esm",
        sourcemap: true,
        file: "dist/disclosure-menu-bs4.esm.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
      },
      {
        name: "Bootstrap4DisclosureMenu",
        format: "esm",
        sourcemap: true,
        file: "dist/disclosure-menu-bs4.esm.min.js",
        globals: {
          "accessible-menu/src/disclosureMenu.js": "DisclosureMenu",
          "accessible-menu/src/disclosureMenuItem.js": "DisclosureMenuItem",
          "accessible-menu/src/disclosureMenuToggle.js": "DisclosureMenuToggle",
        },
        plugins: [terser()],
      },
    ],
  },
];
