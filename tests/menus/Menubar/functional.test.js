/**
 * Test the Bootstrap4Menubar class to make sure it functions correctly.
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Menubar } from "../../../index";
import {
  openClose,
  clickTests,
  hoverTests,
  baseKeypressTests,
} from "../_common/functional";
import { fullMenu } from "../_common/test-menus";
import {
  simulateKeypress,
  toggleIsOpen,
  toggleIsClosed,
  toggleIsPreviewed,
} from "../_common/helpers";

openClose(Bootstrap4Menubar);
clickTests(Bootstrap4Menubar);
hoverTests(Bootstrap4Menubar);
baseKeypressTests(Bootstrap4Menubar);

describe("Bootstrap4Menubar keypress tests", () => {
  describe.each(["Spacebar", "Enter"])("'%s' key", (key) => {
    test("Opens submenu and moves focus to first item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      // Use requestAnimationFrame because the keypress itself it trigger the same.
      requestAnimationFrame(() => {
        toggleIsOpen(toggle);
        expect(controlledMenu.currentChild).toBe(0);
      });
    });
  });

  describe("'Escape' key", () => {
    const key = "Escape";

    test("Closes the menu if the menu has a controller and no open children.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        containerElement: document.querySelector("nav"),
        controllerElement: document.querySelector("#toggle-0"),
      });
      const toggle = menu.elements.controller;

      // Set up the menu for the test.
      toggle.dom.toggle.focus();
      toggle.open();
      menu.focusChild(0);

      simulateKeypress(key, menu.dom.menu);

      toggleIsClosed(toggle);
    });
  });

  describe("'ArrowRight' key", () => {
    const key = "ArrowRight";

    test("Moves focus to the next item in the Bootstrap4Menubar.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(1);
    });

    test("If focus is on the last item, moves focus to the first item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(4);

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(0);
    });
  });

  describe("'ArrowLeft' key", () => {
    const key = "ArrowLeft";

    test("Moves focus to the previous item in the Bootstrap4Menubar.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(0);
    });

    test("If focus is on the first item, moves focus to the last item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(4);
    });
  });

  describe("'ArrowDown' key", () => {
    const key = "ArrowDown";

    test("Opens submenu and moves focus to first item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      // Use requestAnimationFrame because the keypress itself it trigger the same.
      requestAnimationFrame(() => {
        toggleIsOpen(toggle);
        expect(controlledMenu.currentChild).toBe(0);
      });
    });
  });

  describe("'ArrowUp' key", () => {
    const key = "ArrowUp";

    test("Opens submenu and moves focus to last item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      // Use requestAnimationFrame because the keypress itself it trigger the same.
      requestAnimationFrame(() => {
        toggleIsOpen(toggle);
        expect(controlledMenu.currentChild).toBe(2);
      });
    });
  });

  describe("'Home' key", () => {
    const key = "Home";

    test("Moves focus to first item in the Bootstrap4Menubar.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(4);

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(0);
    });
  });

  describe("'End' key", () => {
    const key = "End";

    test("Moves focus to last item in the Bootstrap4Menubar.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(4);
    });
  });

  describe("'Character' keys", () => {
    const key = "t";

    test("Moves focus to next item in the Bootstrap4Menubar having a name that starts with the typed character.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(2);
    });

    test("If none of the items have a name starting with the typed character, focus does not move.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(3);

      // Simluate the keypress.
      simulateKeypress(key, menu.dom.menu);

      expect(menu.currentChild).toBe(3);
    });
  });
});

describe("Bootstrap4Menubar submenu keypress tests", () => {
  describe.each(["Spacebar", "Enter"])("'%s' key", (key) => {
    test("Opens submenu and moves focus to first item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;
      const submenuToggle = controlledMenu.elements.submenuToggles[0];
      const subControlledMenu = submenuToggle.elements.controlledMenu;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      // Use requestAnimationFrame because the keypress itself it trigger the same.
      requestAnimationFrame(() => {
        toggleIsOpen(toggle);
        expect(subControlledMenu.currentChild).toBe(0);
      });
    });
  });

  describe("'Escape' key", () => {
    const key = "Escape";

    test("Closes submenu. Moves focus to parent Bootstrap4Menubar item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      toggleIsClosed(toggle);
      expect(menu.currentChild).toBe(1);
    });
  });

  describe("'ArrowRight' key", () => {
    const key = "ArrowRight";

    test("If focus is on an item with a submenu, opens the submenu and places focus on the first item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;
      const submenuToggle = controlledMenu.elements.submenuToggles[0];
      const subControlledMenu = submenuToggle.elements.controlledMenu;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      toggleIsOpen(submenuToggle);
      expect(subControlledMenu.currentChild).toBe(0);
    });

    test("If focus is on an item that does not have a submenu: Closes submenu. Moves focus to next item in the Bootstrap4Menubar. Opens submenu of newly focused Bootstrap4Menubar item, keeping focus on that parent Bootstrap4Menubar item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const originalToggle = menu.elements.submenuToggles[0];
      const newToggle = menu.elements.submenuToggles[1];
      const { controlledMenu } = originalToggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      originalToggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      toggleIsClosed(originalToggle);
      expect(menu.currentChild).toBe(2);
      toggleIsPreviewed(newToggle);
    });
  });

  describe("'ArrowLeft' key", () => {
    const key = "ArrowLeft";

    test("Closes submenu and moves focus to parent menu item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;
      const submenuToggle = controlledMenu.elements.submenuToggles[0];
      const subControlledMenu = submenuToggle.elements.controlledMenu;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(1);
      submenuToggle.open();
      subControlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, subControlledMenu.dom.menu);

      toggleIsClosed(submenuToggle);
      expect(controlledMenu.currentChild).toBe(1);
    });

    test("If parent menu item is in the Bootstrap4Menubar, also: moves focus to previous item in the Bootstrap4Menubar. Opens submenu of newly focused Bootstrap4Menubar item, keeping focus on that parent Bootstrap4Menubar item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
      });
      const originalToggle = menu.elements.submenuToggles[1];
      const newToggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = originalToggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(2);
      originalToggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      toggleIsClosed(originalToggle);
      expect(menu.currentChild).toBe(1);
      toggleIsPreviewed(newToggle);
    });
  });

  describe("'ArrowDown' key", () => {
    const key = "ArrowDown";

    test("Moves focus to the next item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(1);
    });

    test("If focus is on the last item, moves focus to the first item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(2);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(0);
    });
  });

  describe("'ArrowUp' key", () => {
    const key = "ArrowUp";

    test("Moves focus to the previous item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(0);
    });

    test("If focus is on the first item, moves focus to the last item.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(2);
    });
  });

  describe("'Home' key", () => {
    const key = "Home";

    test("Moves focus to the first item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(1);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(0);
    });
  });

  describe("'End' key", () => {
    const key = "End";

    test("Moves focus to the last item in the submenu.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(2);
    });
  });

  describe("'Character' keys", () => {
    const key = "s";

    test("Moves focus to the next item having a name that starts with the typed character.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(0);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(1);
    });

    test("If none of the items have a name starting with the typed character, focus does not move.", () => {
      // Set up the DOM.
      document.body.innerHTML = fullMenu;
      const menu = new Bootstrap4Menubar({
        menuElement: document.querySelector("#menu-0"),
        optionalKeySupport: true,
      });
      const toggle = menu.elements.submenuToggles[0];
      const { controlledMenu } = toggle.elements;

      // Enter the menu.
      menu.elements.menuItems[0].dom.link.focus();

      // Set up the menu for the test.
      menu.focusChild(1);
      toggle.open();
      controlledMenu.focusChild(2);

      // Simluate the keypress.
      simulateKeypress(key, controlledMenu.dom.menu);

      expect(controlledMenu.currentChild).toBe(2);
    });
  });
});
