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
   * {@inheritdoc}
   *
   * @param {object}                 param0                               - The menu object.
   * @param {HTMLElement}            param0.menuElement                   - The menu element in the DOM.
   * @param {string}                 [param0.menuItemSelector = "li"]     - The CSS selector string for menu items.
   * @param {string}                 [param0.menuLinkSelector = "a"]      - The CSS selector string for menu links.
   * @param {string}                 [param0.submenuItemSelector = ""]    - The CSS selector string for menu items containing submenus.
   * @param {string}                 [param0.submenuToggleSelector = "a"] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [param0.submenuSelector = "ul"]      - The CSS selector string for submenus.
   * @param {HTMLElement|null}       [param0.controllerElement = null]    - The element controlling the menu in the DOM.
   * @param {HTMLElement|null}       [param0.containerElement = null]     - The element containing the menu in the DOM.
   * @param {string}                 [param0.openClass = "show"]          - The class to apply when a menu is "open".
   * @param {string}                 [param0.closeClass = ""]             - The class to apply when a menu is "closed".
   * @param {boolean}                [param0.isTopLevel = false]          - A flag to mark the root menu.
   * @param {Bootstrap4Menubar|null} [param0.parentMenu = null]           - The parent menu to this menu.
   * @param {string}                 [param0.hoverType = "off"]           - The type of hoverability a menu has.
   * @param {number}                 [param0.hoverDelay = 250]            - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                [param0.initialize = true]           - A flag to initialize the menu immediately upon creation.
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

    this.MenuType = Bootstrap4Menubar;
    this.MenuItemType = Bootstrap4MenubarItem;
    this.MenuToggleType = Bootstrap4MenubarToggle;

    if (initialize) {
      this.initialize();
    }
  }
}

export default Bootstrap4Menubar;
