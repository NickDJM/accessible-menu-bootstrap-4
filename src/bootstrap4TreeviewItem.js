/* eslint-disable jsdoc/no-undefined-types */

import TreeviewItem from "accessible-menu/src/treeviewItem.js";

/**
 * A basic navigation link contained inside of a Bootstrap4Treeview.
 */
class Bootstrap4TreeviewItem extends TreeviewItem {
  /**
   * @inheritdoc
   * @param {object}                        options                         - The options for generating the menu item.
   * @param {HTMLElement}                   options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}                   options.menuLinkElement         - The menu item's link in the DOM.
   * @param {Treeview}                      options.parentMenu              - The parent menu.
   * @param {boolean}                       [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {Bootstrap4Treeview|null}       [options.childMenu = null]      - The child menu.
   * @param {Bootstrap4TreeviewToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                       [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
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

export default Bootstrap4TreeviewItem;