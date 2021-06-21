import DisclosureMenu from "accessible-menu/src/disclosureMenu.js";
import Bootstrap4DisclosureMenuItem from "./bootstrap4DisclosureMenuItem.js";
import Bootstrap4DisclosureMenuToggle from "./bootstrap4DisclosureMenuToggle.js";

/**
 * An accessible disclosure menu in the DOM using Bootstrap 4.
 *
 * See https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html
 */
class Bootstrap4DisclosureMenu extends DisclosureMenu {
  /**
   * {@inheritdoc}
   *
   * @param {object}                        param0                               - The menu object.
   * @param {HTMLElement}                   param0.menuElement                   - The menu element in the DOM.
   * @param {string}                        [param0.menuItemSelector = "li"]     - The CSS selector string for menu items.
   * @param {string}                        [param0.menuLinkSelector = "a"]      - The CSS selector string for menu links.
   * @param {string}                        [param0.submenuItemSelector = ""]    - The CSS selector string for menu items containing submenus.
   * @param {string}                        [param0.submenuToggleSelector = "a"] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                        [param0.submenuSelector = "ul"]      - The CSS selector string for submenus.
   * @param {HTMLElement|null}              [param0.controllerElement = null]    - The element controlling the menu in the DOM.
   * @param {HTMLElement|null}              [param0.containerElement = null]     - The element containing the menu in the DOM.
   * @param {string}                        [param0.openClass = "show"]          - The class to apply when a menu is "open".
   * @param {string}                        [param0.closeClass = ""]             - The class to apply when a menu is "closed".
   * @param {boolean}                       [param0.isTopLevel = false]          - A flag to mark the root menu.
   * @param {Bootstrap4DisclosureMenu|null} [param0.parentMenu = null]           - The parent menu to this menu.
   * @param {string}                        [param0.hoverType = "off"]           - The type of hoverability a menu has.
   * @param {number}                        [param0.hoverDelay = 250]            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                       [param0.optionalKeySupport = false]  - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                       [param0.initialize = true]           - A flag to initialize the menu immediately upon creation.
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
    closeClass = "",
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

    // Set default class types.
    this.MenuType = Bootstrap4DisclosureMenu;
    this.MenuItemType = Bootstrap4DisclosureMenuItem;
    this.MenuToggleType = Bootstrap4DisclosureMenuToggle;

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap4DisclosureMenu;
