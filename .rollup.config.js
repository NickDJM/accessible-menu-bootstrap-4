import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default [
  {
    input: "./rollup.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
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
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
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
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
        plugins: [terser()],
      },
    ],
  },
  {
    input: "./src/bootstrap4DisclosureMenu.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
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
  {
    input: "./src/bootstrap4Menubar.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
    output: [
      {
        name: "Bootstrap4Menubar",
        format: "iife",
        sourcemap: true,
        file: "dist/menubar-bs4.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
      },
      {
        name: "Bootstrap4Menubar",
        format: "iife",
        sourcemap: true,
        file: "dist/menubar-bs4.min.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
        plugins: [terser()],
      },
      {
        name: "Bootstrap4Menubar",
        format: "esm",
        sourcemap: true,
        file: "dist/menubar-bs4.esm.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
      },
      {
        name: "Bootstrap4Menubar",
        format: "esm",
        sourcemap: true,
        file: "dist/menubar-bs4.esm.min.js",
        globals: {
          "accessible-menu/src/menubar.js": "Menubar",
          "accessible-menu/src/menubarItem.js": "MenubarItem",
          "accessible-menu/src/menubarToggle.js": "MenubarToggle",
        },
        plugins: [terser()],
      },
    ],
  },
  {
    input: "./src/bootstrap4Treeview.js",
    plugins: [babel({ babelHelpers: "inline" }), resolve(), cleanup()],
    output: [
      {
        name: "Bootstrap4Treeview",
        format: "iife",
        sourcemap: true,
        file: "dist/treeview-bs4.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
      },
      {
        name: "Bootstrap4Treeview",
        format: "iife",
        sourcemap: true,
        file: "dist/treeview-bs4.min.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
        plugins: [terser()],
      },
      {
        name: "Bootstrap4Treeview",
        format: "esm",
        sourcemap: true,
        file: "dist/treeview-bs4.esm.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
      },
      {
        name: "Bootstrap4Treeview",
        format: "esm",
        sourcemap: true,
        file: "dist/treeview-bs4.esm.min.js",
        globals: {
          "accessible-menu/src/treeview.js": "Treeview",
          "accessible-menu/src/treeviewItem.js": "TreeviewItem",
          "accessible-menu/src/treeviewToggle.js": "TreeviewToggle",
        },
        plugins: [terser()],
      },
    ],
  },
];
