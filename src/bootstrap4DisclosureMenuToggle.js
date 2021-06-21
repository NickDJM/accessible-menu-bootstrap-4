/* eslint-disable jsdoc/no-undefined-types */

import DisclosureMenuToggle from "accessible-menu/src/disclosureMenuToggle.js";

/*
 * A link or button that controls the visibility of a Bootstrap4DisclosureMenu.
 */
class Bootstrap4DisclosureMenuToggle extends DisclosureMenuToggle {
  /**
   * {@inheritdoc}
   *
   * @param {object}                        param0                     - The menu toggle object.
   * @param {HTMLElement}                   param0.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}                   param0.parentElement       - The element containing the controlled menu.
   * @param {Bootstrap4DisclosureMenu}      param0.controlledMenu      - The menu controlled by this toggle.
   * @param {Bootstrap4DisclosureMenu|null} [param0.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}                       [param0.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
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

    this.elements.controlledMenu.dom.container.classList.add("collapse");

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
      this.elements.controlledMenu.dom.container.classList.add(openClass);
    }

    // Remove the close class.
    if (closeClass !== "") {
      this.elements.controlledMenu.dom.container.classList.remove(closeClass);
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
      this.elements.controlledMenu.dom.container.classList.add(closeClass);
    }

    // Remove the open class.
    if (openClass !== "") {
      this.elements.controlledMenu.dom.container.classList.remove(openClass);
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this.collapseEvent);
    }
  }
}

export default Bootstrap4DisclosureMenuToggle;
