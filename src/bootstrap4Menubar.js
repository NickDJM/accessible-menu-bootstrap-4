import Menubar from "accessible-menu/src/menubar.js";
import Bootstrap4MenubarItem from "./bootstrap4MenubarItem.js";
import Bootstrap4MenubarToggle from "./bootstrap4MenubarToggle.js";

/**
 * An accessible menubar navigation in the DOM.
 *
 * See https://www.w3.org/TR/wai-aria-practices-1.2/examples/menubar/menubar-1/menubar-1.html
 */
class Bootstrap4Menubar extends Menubar {
  /**
   * The class to use when generating submenus.
   *
   * @type {typeof Bootstrap4Menubar}
   *
   * @public
   */
  _MenuType = Bootstrap4Menubar; // eslint-disable-line no-use-before-define

  /**
   * The class to use when generating menu items.
   *
   * @type {typeof Bootstrap4MenubarItem}
   *
   * @public
   */
  _MenuItemType = Bootstrap4MenubarItem;

  /**
   * The class to use when generating submenu toggles.
   *
   * @type {typeof Bootstrap4MenubarToggle}
   *
   * @public
   */
  _MenuToggleType = Bootstrap4MenubarToggle;

  /**
   * Constructs the menu.
   *
   * @param {object}                   options                             - The options for generating the menu.
   * @param {HTMLElement}              options.menuElement                 - The menu element in the DOM.
   * @param {string}                   [options.menuItemSelector = li]     - The CSS selector string for menu items.
   * @param {string}                   [options.menuLinkSelector = a]      - The CSS selector string for menu links.
   * @param {string}                   [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
   * @param {string}                   [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                   [options.submenuSelector = ul]      - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}       [options.controllerElement = null]  - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}       [options.containerElement = null]   - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}   [options.openClass = show]          - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}   [options.closeClass = collapse]     - The class to apply when a menu is "closed".
   * @param {boolean}                  [options.isTopLevel = false]        - A flag to mark the root menu.
   * @param {(Bootstrap4Menubar|null)} [options.parentMenu = null]         - The parent menu to this menu.
   * @param {string}                   [options.hoverType = off]           - The type of hoverability a menu has.
   * @param {number}                   [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                  [options.initialize = true]         - A flag to initialize the menu immediately upon creation.
   */
  constructor({
    menuElement,
    menuItemSelector = ".nav-item",
    menuLinkSelector = ".nav-link,.dropdown-item",
    submenuItemSelector = ".dropdown",
    submenuToggleSelector = ".dropdown-toggle",
    submenuSelector = ".dropdown-menu",
    controllerElement = null,
    containerElement = null,
    openClass = "show",
    closeClass = "collapse",
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
      initialize: false,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap4Menubar;
