import Treeview from "accessible-menu/src/treeview.js";
import Bootstrap4TreeviewItem from "./bootstrap4TreeviewItem.js";
import Bootstrap4TreeviewToggle from "./bootstrap4TreeviewToggle.js";

/**
 * An accessible treeview navigation in the DOM.
 *
 * See https://www.w3.org/TR/wai-aria-practices-1.2/examples/treeview/treeview-2/treeview-2a.html
 */
class Bootstrap4Treeview extends Treeview {
  /**
   * @inheritdoc
   * @param {object}                  options                             - The options for generating the menu.
   * @param {HTMLElement}             options.menuElement                 - The menu element in the DOM.
   * @param {string}                  [options.menuItemSelector = li]     - The CSS selector string for menu items.
   * @param {string}                  [options.menuLinkSelector = a]      - The CSS selector string for menu links.
   * @param {string}                  [options.submenuItemSelector = ""]  - The CSS selector string for menu items containing submenus.
   * @param {string}                  [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                  [options.submenuSelector = ul]      - The CSS selector string for submenus.
   * @param {HTMLElement|null}        [options.controllerElement = null]  - The element controlling the menu in the DOM.
   * @param {HTMLElement|null}        [options.containerElement = null]   - The element containing the menu in the DOM.
   * @param {string|string[]|null}    [options.openClass = show]          - The class to apply when a menu is "open".
   * @param {string|string[]|null}    [options.closeClass = hide]         - The class to apply when a menu is "closed".
   * @param {boolean}                 [options.isTopLevel = false]        - A flag to mark the root menu.
   * @param {Bootstrap4Treeview|null} [options.parentMenu = null]         - The parent menu to this menu.
   * @param {string}                  [options.hoverType = off]           - The type of hoverability a menu has.
   * @param {number}                  [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                 [options.initialize = true]         - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement,
    menuItemSelector = "li",
    menuLinkSelector = "a",
    submenuItemSelector = "",
    submenuToggleSelector = "a",
    submenuSelector = "ul",
    controllerElement = null,
    containerElement = null,
    openClass = "show",
    closeClass = "hide",
    isTopLevel = true,
    parentMenu = null,
    hoverType = "off",
    hoverDelay = 250,
    initialize = true,
  }) {
    super({
      menuElement,
      menuItemSelector,
      menuLinkSelector,
      submenuItemSelector,
      submenuToggleSelector,
      submenuSelector,
      controllerElement,
      containerElement,
      openClass,
      closeClass,
      isTopLevel,
      parentMenu,
      hoverType,
      hoverDelay,
      initialize: true,
    });

    // Set default class types.
    this.MenuType = Bootstrap4Treeview;
    this.MenuItemType = Bootstrap4TreeviewItem;
    this.MenuToggleType = Bootstrap4TreeviewToggle;

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap4Treeview;
