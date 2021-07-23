/* eslint-disable jsdoc/no-undefined-types */

import DisclosureMenuToggle from "accessible-menu/src/disclosureMenuToggle.js";

/*
 * A link or button that controls the visibility of a Bootstrap4DisclosureMenu.
 */
class Bootstrap4DisclosureMenuToggle extends DisclosureMenuToggle {
  /**
   * The DOM elements within the menu toggle.
   *
   * @type {object.<HTMLElement>}
   * @property {HTMLElement} toggle    - The menu toggle.
   * @property {HTMLElement} parent    - The menu containing this toggle.
   * @property {HTMLElement} container - The element that controlls the visibility of the child menu.
   * @protected
   */
  _dom = {
    toggle: null,
    parent: null,
    container: null,
  };

  /**
   * Constructs the menu toggle.
   *
   * @param {object}                        options                     - The options for generating the menu toggle.
   * @param {HTMLElement}                   options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}                   options.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap4DisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap4DisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                       [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement,
    parentElement,
    controlledMenu,
    parentMenu = null,
    initialize = true,
  }) {
    super({
      menuToggleElement,
      parentElement,
      controlledMenu,
      parentMenu,
      initialize: false,
    });

    // Set DOM elements.
    this._dom.toggle = menuToggleElement;
    this._dom.parent = parentElement;
    // The container differs based on if the menu is top-level or not.
    this._dom.container = controlledMenu.isTopLevel
      ? controlledMenu.dom.container
      : controlledMenu.dom.menu;

    if (initialize) {
      this.initialize();
    }
  }

  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */
  initialize() {
    super.initialize();

    this.dom.container.classList.add("collapse");

    if (this.dom.toggle.hasAttribute("data-toggle")) {
      this.dom.toggle.removeAttribute("data-toggle");
    }

    if (this.dom.toggle.hasAttribute("data-target")) {
      this.dom.toggle.removeAttribute("data-target");
    }
  }

  /**
   * Expands the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   */
  expand(emit = true) {
    const { closeClass, openClass } = this.elements.controlledMenu;

    this.dom.toggle.setAttribute("aria-expanded", "true");

    // Add the open class
    if (openClass !== "") {
      if (typeof openClass === "string") {
        this.dom.container.classList.add(openClass);
      } else {
        this.dom.container.classList.add(...openClass);
      }
    }

    // Remove the close class.
    if (closeClass !== "") {
      if (typeof closeClass === "string") {
        this.dom.container.classList.remove(closeClass);
      } else {
        this.dom.container.classList.remove(...closeClass);
      }
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this.expandEvent);
    }
  }

  /**
   * Collapses the controlled menu.
   *
   * Alters ARIA attributes and classes.
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   */
  collapse(emit = true) {
    const { closeClass, openClass } = this.elements.controlledMenu;

    this.dom.toggle.setAttribute("aria-expanded", "false");

    // Add the close class
    if (closeClass !== "") {
      if (typeof closeClass === "string") {
        this.dom.container.classList.add(closeClass);
      } else {
        this.dom.container.classList.add(...closeClass);
      }
    }

    // Remove the open class.
    if (openClass !== "") {
      if (typeof openClass === "string") {
        this.dom.container.classList.remove(openClass);
      } else {
        this.dom.container.classList.remove(...openClass);
      }
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this.collapseEvent);
    }
  }
}

export default Bootstrap4DisclosureMenuToggle;
