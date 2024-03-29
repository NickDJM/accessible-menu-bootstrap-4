import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";
import Bootstrap4DisclosureMenuItem from "./bootstrap4DisclosureMenuItem.js";
import Bootstrap4DisclosureMenuToggle from "./bootstrap4DisclosureMenuToggle.js";

/**
 * An accessible disclosure menu in the DOM.
 *
 * See {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html|Example Disclosure for Navigation Menus}
 *
 * @extends DisclosureMenu
 */
class Bootstrap4DisclosureMenu extends DisclosureMenu {
  /**
   * The class to use when generating submenus.
   *
   * @type {typeof Bootstrap4DisclosureMenu}
   *
   * @protected
   */
  _MenuType = Bootstrap4DisclosureMenu; // eslint-disable-line no-use-before-define

  /**
   * The class to use when generating menu items.
   *
   * @type {typeof Bootstrap4DisclosureMenuItem}
   *
   * @protected
   */
  _MenuItemType = Bootstrap4DisclosureMenuItem;

  /**
   * The class to use when generating submenu toggles.
   *
   * @type {typeof Bootstrap4DisclosureMenuToggle}
   *
   * @protected
   */
  _MenuToggleType = Bootstrap4DisclosureMenuToggle;

  /**
   * Constructs the menu.
   *
   * @param {object}                          options                              - The options for generating the menu.
   * @param {HTMLElement}                     options.menuElement                  - The menu element in the DOM.
   * @param {string}                          [options.menuItemSelector = li]      - The CSS selector string for menu items.
   * @param {string}                          [options.menuLinkSelector = a]       - The CSS selector string for menu links.
   * @param {string}                          [options.submenuItemSelector]        - The CSS selector string for menu items containing submenus.
   * @param {string}                          [options.submenuToggleSelector = a]  - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                          [options.submenuSelector = ul]       - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}              [options.controllerElement = null]   - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}              [options.containerElement = null]    - The element containing the menu in the DOM.
   * @param {(string|string[]|null)}          [options.openClass = show]           - The class to apply when a menu is "open".
   * @param {(string|string[]|null)}          [options.closeClass = collapse]      - The class to apply when a menu is "closed".
   * @param {boolean}                         [options.isTopLevel = false]         - A flag to mark the root menu.
   * @param {(Bootstrap4DisclosureMenu|null)} [options.parentMenu = null]          - The parent menu to this menu.
   * @param {string}                          [options.hoverType = off]            - The type of hoverability a menu has.
   * @param {number}                          [options.hoverDelay = 250]           - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                         [options.optionalKeySupport = false] - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                         [options.initialize = true]          - A flag to initialize the menu immediately upon creation.
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
    optionalKeySupport = false,
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
      optionalKeySupport,
      initialize: false,
    });

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap4DisclosureMenu;
