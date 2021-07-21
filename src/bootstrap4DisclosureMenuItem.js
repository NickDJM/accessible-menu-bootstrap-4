/* eslint-disable jsdoc/no-undefined-types */

import DisclosureMenuItem from "accessible-menu/src/disclosureMenuItem.js";

/**
 * A basic navigation link contained inside of a Bootstrap4DisclosureMenu.
 */
class Bootstrap4DisclosureMenuItem extends DisclosureMenuItem {
  /**
   * {@inheritdoc}
   *
   * @param {object}                              param0                         - The menu item object.
   * @param {HTMLElement}                         param0.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                         param0.menuLinkElement         - The menu item's link in the DOM.
   * @param {Bootstrap4DisclosureMenu}            param0.parentMenu              - The parent menu.
   * @param {boolean}                             [param0.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Bootstrap4DisclosureMenu|null}       [param0.childMenu = null]      - The child menu.
   * @param {Bootstrap4DisclosureMenuToggle|null} [param0.toggle = null]         - The controller for the child menu.
   * @param {boolean}                             [param0.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement,
    menuLinkElement,
    parentMenu,
    isSubmenuItem = false,
    childMenu = null,
    toggle = null,
    initialize = true,
  }) {
    super({
      menuItemElement,
      menuLinkElement,
      parentMenu,
      isSubmenuItem,
      childMenu,
      toggle,
      initialize: false,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap4DisclosureMenuItem;