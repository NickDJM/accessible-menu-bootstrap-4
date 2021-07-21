/**
 * Check to see if the provided elements have a specific contructor.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * This is essentially just a wrapper function around checking instanceof with
 * more descriptive error message to help debugging.
 *
 * Will return true is the check is successful.
 *
 * @param   {object} contructor - The constructor to check for.
 * @param   {object} elements   - The element(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */
function isValidInstance(contructor, elements) {
  try {
    if (typeof elements !== "object") {
      const elementsType = typeof elements;
      throw new TypeError(`AccessibleMenu: Elements given to isValidInstance() must be inside of an object. ${elementsType} given.`);
    }

    for (const key in elements) {
      if (!(elements[key] instanceof contructor)) {
        const elementType = typeof elements[key];
        throw new TypeError(`AccessibleMenu: ${key} must be an instance of ${contructor.name}. ${elementType} given.`);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Check to see if the provided values are of a specific type.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * This is essentially just a wrapper function around checking typeof with
 * more descriptive error message to help debugging.
 *
 * Will return true is the check is successful.
 *
 * @param   {string} type   - The type to check for.
 * @param   {object} values - The value(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isValidType(type, values) {
  try {
    if (typeof values !== "object") {
      const valuesType = typeof values;
      throw new TypeError(`AccessibleMenu: Values given to isValidType() must be inside of an object. ${valuesType} given.`);
    }

    for (const key in values) {
      const valueType = typeof values[key];

      if (valueType !== type) {
        throw new TypeError(`AccessibleMenu: ${key} must be a ${type}. ${valueType} given.`);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Checks to see if the provided values are valid CSS selectors.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return true is the check is successful.
 *
 * @param   {object.<string>} values - The value(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isCSSSelector(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;
      throw new TypeError(`AccessibleMenu: Values given to isCSSSelector() must be inside of an object. ${type} given.`);
    }

    for (const key in values) {
      try {
        if (values[key] === null) {
          throw new Error();
        }

        document.querySelector(values[key]);
      } catch (error) {
        throw new TypeError(`AccessibleMenu: ${key} must be a valid CSS selector. "${values[key]}" given.`);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Checks to see if the provided value is either a string or an array of strings.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return true is the check is successful.
 *
 * @param   {object.<string,string[]>} values - The value(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isValidClassList(values) {
  try {
    if (typeof values !== "object" || Array.isArray(values)) {
      const type = typeof values;
      throw new TypeError(`AccessibleMenu: Values given to isValidClassList() must be inside of an object. ${type} given.`);
    }

    for (const key in values) {
      const type = typeof values[key];

      if (type !== "string") {
        if (Array.isArray(values[key])) {
          values[key].forEach(value => {
            if (typeof value !== "string") {
              throw new TypeError(`AccessibleMenu: ${key} must be a string or an array of strings. An array containing non-strings given.`);
            }
          });
        } else {
          throw new TypeError(`AccessibleMenu: ${key} must be a string or an array of strings. ${type} given.`);
        }
      } else {
        const obj = {};
        obj[key] = values[key];
        isCSSSelector(obj);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Check to see if the provided values are valid focus states for a menu.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return true is the check is successful.
 *
 * @param   {object.<string>} values - The value(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isValidState(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;
      throw new TypeError(`AccessibleMenu: Values given to isValidState() must be inside of an object. ${type} given.`);
    }

    const validStates = ["none", "self", "child"];

    for (const key in values) {
      if (!validStates.includes(values[key])) {
        throw new TypeError(`AccessibleMenu: ${key} must be one of the following values: ${validStates.join(", ")}. "${values[key]}" given.`);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Check to see if the provided values are valid event types for a menu.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return true is the check is successful.
 *
 * @param   {object.<string>} values - The value(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isValidEvent(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;
      throw new TypeError(`AccessibleMenu: Values given to isValidEvent() must be inside of an object. ${type} given.`);
    }

    const validEvents = ["none", "mouse", "keyboard", "character"];

    for (const key in values) {
      if (!validEvents.includes(values[key])) {
        throw new TypeError(`AccessibleMenu: ${key} must be one of the following values: ${validEvents.join(", ")}. "${values[key]}" given.`);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Check to see if the provided values are valid hover types for a menu.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return true is the check is successful.
 *
 * @param   {object.<string>} values - The value(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isValidHoverType(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;
      throw new TypeError(`AccessibleMenu: Values given to isValidHoverType() must be inside of an object. ${type} given.`);
    }

    const validTypes = ["off", "on", "dynamic"];

    for (const key in values) {
      if (!validTypes.includes(values[key])) {
        throw new TypeError(`AccessibleMenu: ${key} must be one of the following values: ${validTypes.join(", ")}. "${values[key]}" given.`);
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
/**
 * Checks to see if the provided elements are using a specific tag.
 *
 * The elements must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * @param   {string}               tagName  - The name of the tag.
 * @param   {object.<HTMLElement>} elements - The element(s) to check.
 *
 * @returns {boolean} - The result of the check.
 */

function isTag(tagName, elements) {
  if (isValidType("string", {
    tagName
  }) && isValidInstance(HTMLElement, elements)) {
    const tag = tagName.toLowerCase();
    let check = true;

    for (const key in elements) {
      if (elements[key].tagName.toLowerCase() !== tag) check = false;
    }

    return check;
  } else {
    return false;
  }
}
/**
 * Checks to see if an event is supported by a node.
 *
 * @param   {string}      event   - The event type.
 * @param   {HTMLElement} element - The element to check.
 *
 * @returns {boolean} - The result.
 */

function isEventSupported(event, element) {
  if (isValidType("string", {
    event
  }) && isValidInstance(HTMLElement, {
    element
  })) {
    const eventProp = `on${event}`;
    return typeof element[eventProp] !== "undefined";
  } else {
    return false;
  }
}

/* eslint-disable jsdoc/no-undefined-types */
/**
 * A link or button that controls the visibility of a {@link BaseMenu}.
 */

class BaseMenuToggle {
  /**
   * @inheritdoc
   *
   * @param {object}        options                     - The options for generating the menu toggle.
   * @param {HTMLElement}   options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}   options.parentElement       - The element containing the controlled menu.
   * @param {BaseMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {BaseMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   */
  constructor({
    menuToggleElement,
    parentElement,
    controlledMenu,
    parentMenu = null
  }) {
    this.domElements = {
      toggle: menuToggleElement,
      parent: parentElement
    };
    this.menuElements = {
      controlledMenu,
      parentMenu
    };
    this.isOpen = false;
    /**
     * Expand event.
     *
     * @event accessibleMenuExpand
     * @type {CustomEvent}
     * @property {object<BaseMenuToggle>} details - The details object containing the BaseMenuToggle itself.
     */

    this.expandEvent = new CustomEvent("accessibleMenuExpand", {
      bubbles: true,
      detail: {
        toggle: this
      }
    });
    /**
     * Collapse event.
     *
     * @event accessibleMenuCollapse
     * @type {CustomEvent}
     * @property {object<BaseMenuToggle>} details - The details object containing the BaseMenuToggle itself.
     */

    this.collapseEvent = new CustomEvent("accessibleMenuCollapse", {
      bubbles: true,
      detail: {
        toggle: this
      }
    });
  }
  /**
   * Initializes the menu toggle.
   *
   * Initialize does a lot of setup on the menu toggle.
   *
   * The most basic setup steps are to ensure that the toggle has `aria-haspopup`
   * set to "true", `aria-expanded` initially set to "false" and, if the toggle
   * element is not a `<button>`, set the `role` to "button".
   *
   * The next step to the initialization is to ensure both the toggle and the
   * menu it controlls have IDs.
   *
   * If they do not, the following steps take place:
   * - Generate a random 10 character string,
   * - Get the innerText of the toggle,
   * - Set the toggle's ID to: `${toggle-inner-text}-${the-random-string}-menu-button`
   * - Set the menu's ID to: `${toggle-inner-text}-${the-random-string}-menu`
   *
   * Once the ID's have been generated, the menu's `aria-labelledby` is set to
   * the toggle's ID, and the toggle's `aria-controls` is set to the menu's ID.
   *
   * Finally, the collapse method is called to make sure the submenu is closed.
   */


  initialize() {
    // Add WAI-ARIA properties.
    this.dom.toggle.setAttribute("aria-haspopup", "true");
    this.dom.toggle.setAttribute("aria-expanded", "false"); // If the toggle element is a button, there's no need to add a role.

    if (!isTag("button", {
      toggle: this.dom.toggle
    })) {
      this.dom.toggle.setAttribute("role", "button");
    } // Ensure both toggle and menu have IDs.


    if (this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
      const randomString = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
      let id = this.dom.toggle.innerText.replace(/[^a-zA-Z0-9\s]/g, "");
      let finalID = randomString;

      if (!id.replace(/\s/g, "").length && this.dom.toggle.getAttribute("aria-label")) {
        id = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "");
      }

      if (id.replace(/\s/g, "").length > 0) {
        id = id.toLowerCase().replace(/\s+/g, "-");

        if (id.startsWith("-")) {
          id = id.substring(1);
        }

        if (id.endsWith("-")) {
          id = id.slice(0, -1);
        }

        finalID = `${id}-${finalID}`;
      }

      this.dom.toggle.id = this.dom.toggle.id || `${finalID}-menu-button`;
      this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || `${finalID}-menu`;
    } // Set up proper aria label and control.


    this.elements.controlledMenu.dom.menu.setAttribute("aria-labelledby", this.dom.toggle.id);
    this.dom.toggle.setAttribute("aria-controls", this.elements.controlledMenu.dom.menu.id); // Make sure the menu is collapsed on initialization, but do not emit the collapse event.

    this.collapse(false);
  }
  /**
   * The DOM elements within the toggle.
   *
   * @type {object.<HTMLElement>}
   * @property {HTMLElement} toggle - The menu toggle.
   * @property {HTMLElement} parent - The menu containing this toggle.
   */


  get dom() {
    return this.domElements;
  }
  /**
   * The declared accessible-menu elements within the menu toggle.
   *
   * @type {object.<BaseMenu>}
   * @property {BaseMenu} controlledMenu - The menu controlled by this toggle.
   * @property {BaseMenu} parentMenu     - The menu containing this toggle.
   */


  get elements() {
    return this.menuElements;
  }
  /**
   * The open state on the menu.
   *
   * @type {boolean}
   */


  get isOpen() {
    return this.show;
  }

  set isOpen(value) {
    isValidType("boolean", {
      value
    });
    this.show = value;
  }
  /**
   * Expands the controlled menu.
   *
   * Sets the toggle's `aria-expanded` to "true", adds the
   * {@link BaseMenu#openClass|open class} to the toggle's parent menu item
   * and controlled menu, and removed the {@link BaseMenu#closeClass|closed class}
   * from the toggle's parent menu item and controlled menu.
   *
   * If `emit` is set to `true`, this will also emit a custom event
   * called {@link accessibleMenuExpand}
   *
   * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
   * @fires accessibleMenuExpand
   */


  expand(emit = true) {
    const {
      closeClass,
      openClass
    } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "true"); // Add the open class

    if (openClass !== "") {
      if (typeof openClass === "string") {
        this.elements.controlledMenu.dom.menu.classList.add(openClass);
      } else {
        this.elements.controlledMenu.dom.menu.classList.add(...openClass);
      }
    } // Remove the close class.


    if (closeClass !== "") {
      if (typeof closeClass === "string") {
        this.elements.controlledMenu.dom.menu.classList.remove(closeClass);
      } else {
        this.elements.controlledMenu.dom.menu.classList.remove(...closeClass);
      }
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this.expandEvent);
    }
  }
  /**
   * Collapses the controlled menu.
   *
   * Sets the toggle's `aria-expanded` to "false", adds the
   * {@link BaseMenu#closeClass|closed class} to the toggle's parent menu item
   * and controlled menu, and removes the {@link BaseMenu#openClass|open class}
   * from the toggle's parent menu item and controlled menu.
   *
   * If `emit` is set to `true`, this will also emit a custom event
   * called {@link accessibleMenuCollapse}
   *
   * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
   * @fires accessibleMenuCollapse
   */


  collapse(emit = true) {
    const {
      closeClass,
      openClass
    } = this.elements.controlledMenu;
    this.dom.toggle.setAttribute("aria-expanded", "false"); // Add the close class

    if (closeClass !== "") {
      if (typeof closeClass === "string") {
        this.elements.controlledMenu.dom.menu.classList.add(closeClass);
      } else {
        this.elements.controlledMenu.dom.menu.classList.add(...closeClass);
      }
    } // Remove the open class.


    if (openClass !== "") {
      if (typeof openClass === "string") {
        this.elements.controlledMenu.dom.menu.classList.remove(openClass);
      } else {
        this.elements.controlledMenu.dom.menu.classList.remove(...openClass);
      }
    }

    if (emit) {
      this.dom.toggle.dispatchEvent(this.collapseEvent);
    }
  }
  /**
   * Opens the controlled menu.
   *
   * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "self"
   * and the parent menu's focus state to "child", calls {@link BaseMenuToggle#expand|expand},
   * and sets the {@link BaseMenuToggle#isOpen|isOpen} value to `true`.
   */


  open() {
    // Set proper focus state on the child.
    this.elements.controlledMenu.focusState = "self"; // Expand the controlled menu.

    this.expand(); // Set the open flag.

    this.isOpen = true;
  }
  /**
   * Opens the controlled menu without the current focus entering it.
   *
   * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "self"
   * and the parent menu's focus state to "child",
   * and calls {@link BaseMenuToggle#expand|expand}.
   */


  preview() {
    // Set proper focus state on the parent.
    if (this.elements.parentMenu) {
      this.elements.parentMenu.focusState = "self";
    } // Expand the controlled menu.


    this.expand(); // Set the open flag.

    this.isOpen = true;
  }
  /**
   * Closes the controlled menu.
   *
   * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "none"
   * and the parent menu's focus state to "self", blurs the controlled menu
   * and sets it's {@link BaseMenu#currentChild|current child index} to 0,
   * calls {@link BaseMenuToggle#collapse|collapse}, and sets
   * the {@link BaseMenuToggle#isOpen|isOpen} value to `false`.
   */


  close() {
    if (this.isOpen) {
      // Reset controlled menu.
      this.elements.controlledMenu.currentChild = 0;
      this.elements.controlledMenu.blur(); // Set proper focus states on the parent.

      if (this.elements.parentMenu) {
        this.elements.parentMenu.focusState = "self";
      } // Collapse the controlled menu.


      this.collapse(); // Set the open flag.

      this.isOpen = false;
    }
  }
  /**
   * Toggles the open state of the controlled menu between `true` and `false`.
   */


  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Closes all sibling menus.
   */


  closeSiblings() {
    if (this.elements.parentMenu) {
      this.elements.parentMenu.elements.submenuToggles.forEach(toggle => {
        if (toggle !== this) toggle.close();
      });
    }
  }
  /**
   * Closes all child menus.
   */


  closeChildren() {
    this.elements.controlledMenu.elements.submenuToggles.forEach(toggle => toggle.close());
  }

}

/* eslint-disable jsdoc/no-undefined-types */

/**
 * A basic navigation link contained inside of a {@link BaseMenu}.
 */
class BaseMenuItem {
  /**
   * @inheritdoc
   *
   * @param {object}          options                         - The options for generating the menu item.
   * @param {HTMLElement}     options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}     options.menuLinkElement         - The menu item's link in the DOM.
   * @param {BaseMenu}        options.parentMenu              - The parent menu.
   * @param {boolean}         [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {?BaseMenu}       [options.childMenu = null]      - The child menu.
   * @param {?BaseMenuToggle} [options.toggle = null]         - The controller for the child menu.
   */
  constructor({
    menuItemElement,
    menuLinkElement,
    parentMenu,
    isSubmenuItem = false,
    childMenu = null,
    toggle = null
  }) {
    this.domElements = {
      item: menuItemElement,
      link: menuLinkElement
    };
    this.menuElements = {
      parentMenu,
      childMenu,
      toggle
    };
    this.isController = isSubmenuItem;
  }
  /**
   * Initialize the menu item.
   */


  initialize() {}
  /**
   * The DOM elements within the menu item.
   *
   * @type {object.<HTMLElement>}
   * @property {HTMLElement} item - The menu item.
   * @property {HTMLElement} link - The menu item's link.
   */


  get dom() {
    return this.domElements;
  }
  /**
   * The declared accessible-menu elements within the menu item.
   *
   * @type {object.<BaseMenu,BaseMenuToggle>}
   * @property {BaseMenu}        parentMenu - The menu containing this menu item.
   * @property {?BaseMenu}       childMenu  - The menu contained within this menu item.
   * @property {?BaseMenuToggle} toggle     - The menu toggle within this menu item that controls the `childMenu`.
   */


  get elements() {
    return this.menuElements;
  }
  /**
   * A flag marking a submenu item.
   *
   * @type {boolean}
   */


  get isSubmenuItem() {
    return this.isController;
  }
  /**
   * Focuses the menu item's link if the parent menu's
   * {@link BaseMenu#shouldFocus|shouldFocus} value is `true`.
   */


  focus() {
    if (this.elements.parentMenu.shouldFocus) {
      this.dom.link.focus();
    }
  }
  /**
   * Blurs the menu item's link if the parent menu's
   * {@link BaseMenu#shouldFocus|shouldFocus} value is `true`.
   */


  blur() {
    if (this.elements.parentMenu.shouldFocus) {
      this.dom.link.blur();
    }
  }

}

/**
 * Retrieves the pressed key from an event.
 *
 * @param   {KeyboardEvent} event - The keyboard event.
 *
 * @returns {string} - The name of the key or an empty string.
 */
function keyPress(event) {
  try {
    // Use event.key or event.keyCode to support older browsers.
    const key = event.key || event.keyCode;
    const keys = {
      Enter: key === "Enter" || key === 13,
      Space: key === " " || key === "Spacebar" || key === 32,
      Escape: key === "Escape" || key === "Esc" || key === 27,
      ArrowUp: key === "ArrowUp" || key === "Up" || key === 38,
      ArrowRight: key === "ArrowRight" || key === "Right" || key === 39,
      ArrowDown: key === "ArrowDown" || key === "Down" || key === 40,
      ArrowLeft: key === "ArrowLeft" || key === "Left" || key === 37,
      Home: key === "Home" || key === 36,
      End: key === "End" || key === 35,
      Character: isNaN(key) && !!key.match(/^[a-zA-Z]{1}$/),
      Tab: key === "Tab" || key === 9,
      Asterisk: key === "*" || key === 56
    };
    return Object.keys(keys).find(key => keys[key] === true) || "";
  } catch (error) {
    // Return an empty string if something goes wrong.
    return "";
  }
}
/**
 * Stops an event from taking action.
 *
 * @param {Event} event - The event.
 */

function preventEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

/**
 * An accessible navigation element in the DOM.
 *
 * This is intended to be used as a "base" to other menus and not to be used on
 * it's own in the DOM.
 *
 * Use a {@link DisclosureMenu}, {@link Menubar}, or {@link Treeview} instead.
 */

class BaseMenu {
  /**
   * @inheritdoc
   *
   * @param {object}                 options                             - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                 - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]     - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]      - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]      - The CSS selector string for submenus.
   * @param {?HTMLElement}           [options.controllerElement = null]  - The element controlling the menu in the DOM.
   * @param {?HTMLElement}           [options.containerElement = null]   - The element containing the menu in the DOM.
   * @param {?(string|string[])}     [options.openClass = show]          - The class to apply when a menu is "open".
   * @param {?(string|string[])}     [options.closeClass = hide]         - The class to apply when a menu is "closed".
   * @param {boolean}                [options.isTopLevel = false]        - A flag to mark the root menu.
   * @param {?BaseMenu}              [options.parentMenu = null]         - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]           - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
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
    hoverDelay = 250
  }) {
    this.domElements = {
      menu: menuElement,
      menuItems: [],
      submenuItems: [],
      submenuToggles: [],
      submenus: [],
      controller: controllerElement,
      container: containerElement
    };
    this.domSelectors = {
      menuItems: menuItemSelector,
      menuLinks: menuLinkSelector,
      submenuItems: submenuItemSelector,
      submenuToggles: submenuToggleSelector,
      submenus: submenuSelector
    };
    this.menuElements = {
      menuItems: [],
      submenuToggles: [],
      controller: null,
      parentMenu,
      rootMenu: isTopLevel ? this : null
    };
    this.submenuOpenClass = openClass || "";
    this.submenuCloseClass = closeClass || "";
    this.root = isTopLevel;
    this.focussedChild = 0;
    this.state = "none";
    this.event = "none";
    this.hover = hoverType;
    this.delay = hoverDelay; // Set default class types.

    this.MenuType = BaseMenu;
    this.MenuItemType = BaseMenuItem;
    this.MenuToggleType = BaseMenuToggle;
  }
  /**
   * Initializes the menu.
   *
   * The following steps will be taken to initialize the menu:
   * - {@link BaseMenu#validate|Validate} that the menu can initialize,
   * - find the root menu of the menu tree if it isn't already set,
   * - populate all DOM elements within the {@link BaseMenu#dom|dom},
   * - if the current menu is the root menu _and_ has a controller, initialize
   *   the controller, and
   * - populate the menu elements within the {@link BaseMenu#elements|elements}
   *
   * @throws {Error} Will throw an Error if validate returns `false`.
   */


  initialize() {
    if (!this.validate()) {
      throw new Error("AccesibleMenu: cannot initialize menu. See other error messaged for more information.");
    }

    const {
      MenuToggleType
    } = this; // Get the root menu if it doesn't exist.

    if (this.elements.rootMenu === null) this.findRootMenu(this); // Set all of the DOM elements.

    this.setDOMElements();

    if (this.isTopLevel) {
      if (this.dom.controller && this.dom.container) {
        // Create a new BaseMenuToggle to control the menu.
        const toggle = new MenuToggleType({
          menuToggleElement: this.dom.controller,
          parentElement: this.dom.container,
          controlledMenu: this
        });
        this.menuElements.controller = toggle;
      }
    }

    this.createChildElements();
  }
  /**
   * The DOM elements within the menu.
   *
   * @type {object.<HTMLElement,HTMLElement[]>}
   * @property {HTMLElement}   menu           - The menu element.
   * @property {HTMLElement[]} menuItems      - An array of menu items.
   * @property {HTMLElement[]} submenuItems   - An array of menu items that also contain submenu elements.
   * @property {HTMLElement[]} submenuToggles - An array of menu links that function as submenu toggles.
   * @property {HTMLElement[]} submenus       - An array of submenu elements.
   * @property {HTMLElement}   controller     - The toggle for this menu.
   * @property {HTMLElement}   container      - The container for this menu.
   */


  get dom() {
    return this.domElements;
  }
  /**
   * The CSS selectors used by the menu to populate the {@link BaseMenu#dom|dom}.
   *
   * @type {object.<string>}
   * @property {string} menuItems      - The CSS selector for menu items.
   * @property {string} menuLinks      - The CSS selector for menu links.
   * @property {string} submenuItems   - The CSS selector for menu items containing submenus.
   * @property {string} submenuToggles - The CSS selector for menu links that function as submenu toggles.
   * @property {string} submenus       - The CSS selector for for submenus.
   */


  get selectors() {
    return this.domSelectors;
  }
  /**
   * The declared accessible-menu elements within the menu.
   *
   * @type {object.<BaseMenu,BaseMenuToggle,BaseMenuItem[],BaseMenuToggle[]>}
   * @property {BaseMenuItem[]}   menuItems      - An array of menu items.
   * @property {BaseMenuToggle[]} submenuToggles - An array of menu toggles.
   * @property {?BaseMenuToggle}  controller     - A menu toggle that controls this menu.
   * @property {?BaseMenu}        parentMenu     - The parent menu.
   * @property {?BaseMenu}        rootMenu       - The root menu of the menu tree.
   */


  get elements() {
    return this.menuElements;
  }
  /**
   * The class(es) to apply when the menu is open.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's open class(es).
   *
   * @type {string|string[]}
   */


  get openClass() {
    return this.isTopLevel ? this.submenuOpenClass : this.elements.rootMenu.openClass;
  }
  /**
   * The class(es) to apply when the menu is closed.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's close class(es).
   *
   * @type {string|string[]}
   */


  get closeClass() {
    return this.isTopLevel ? this.submenuCloseClass : this.elements.rootMenu.closeClass;
  }
  /**
   * A flag marking the root menu.
   *
   * @type {boolean}
   */


  get isTopLevel() {
    return this.root;
  }
  /**
   * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
   *
   * - Attempting to set a value less than -1 will set the current child to -1.
   * - Attempting to set a value greater than or equal to the number of menu items
   *   will set the current child to the index of the last menu item in the menu.
   *
   * If the current menu has a parent menu _and_ the menu's
   * {@link BaseMenu#currentEvent|current event} is "mouse", The parent menu
   * will have it's current child updated as well to help with transitioning
   * between mouse and keyboard naviation.
   *
   * @type {number}
   */


  get currentChild() {
    return this.focussedChild;
  }
  /**
   * The current state of the menu's focus.
   *
   * - If the menu has submenus, setting the focus state to "none" or "self" will
   *   update all child menus to have the focus state of "none".
   * - If the menu has a parent menu, setting the focus state to "self" or "child"
   *   will update all parent menus to have the focus state of "child".
   *
   * @type {string}
   */


  get focusState() {
    return this.state;
  }
  /**
   * This last event triggered on the menu.
   *
   * @type {string}
   */


  get currentEvent() {
    return this.event;
  }
  /**
   * The currently selected menu item.
   *
   * @type {BaseMenuItem}
   */


  get currentMenuItem() {
    return this.elements.menuItems[this.currentChild];
  }
  /**
   * The type of hoverability for the menu.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's hoverability.
   *
   * @type {string}
   */


  get hoverType() {
    return this.root ? this.hover : this.elements.rootMenu.hoverType;
  }
  /**
   * The delay time (in miliseconds) used for mouseout events to take place.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's hover delay.
   *
   * @type {number}
   */


  get hoverDelay() {
    return this.root ? this.delay : this.elements.rootMenu.hoverDelay;
  }
  /**
   * A flag to check if the menu's focus methods should _actually_ move the focus in the DOM.
   *
   * This will be `false` unless any of the following criteria are met:
   * - The menu's {@link BaseMenu#currentEvent|current event} is "keyboard".
   * - The menu's current event is "character".
   * - The menu's current event is "mouse" _and_ the menu's
   *   {@link BaseMenu#hoverType|hover type} is "dynamic".
   *
   * @type {boolean}
   */


  get shouldFocus() {
    let check = false;

    if (this.currentEvent === "keyboard" || this.currentEvent === "character") {
      check = true;
    }

    if (this.currentEvent === "mouse" && this.hoverType === "dynamic") {
      check = true;
    }

    return check;
  }

  set openClass(value) {
    isValidClassList({
      openClass: value
    });

    if (this.submenuOpenClass !== value) {
      this.submenuOpenClass = value;
    }
  }

  set closeClass(value) {
    isValidClassList({
      closeClass: value
    });

    if (this.submenuCloseClass !== value) {
      this.submenuCloseClass = value;
    }
  }

  set currentChild(value) {
    isValidType("number", {
      value
    });
    /**
     * Update the parent menu's current child to make sure clicks
     * and other jumps don't interfere with keyboard navigation.
     *
     * @param {BaseMenu} menu - The initial menu.
     */

    function setParentChild(menu) {
      const updateEvents = ["mouse", "character"];

      if (updateEvents.includes(menu.currentEvent) && menu.elements.parentMenu) {
        let index = 0;
        let found = false;

        while (!found && index < menu.elements.parentMenu.elements.menuItems.length) {
          const menuItem = menu.elements.parentMenu.elements.menuItems[index];

          if (menuItem.isSubmenuItem && menuItem.elements.toggle.elements.controlledMenu === menu) {
            found = true;
            menu.elements.parentMenu.currentEvent = menu.currentEvent;
            menu.elements.parentMenu.currentChild = index;
          }

          index++;
        }
      }
    }

    if (value < -1) {
      this.focussedChild = -1;
      setParentChild(this);
    } else if (value >= this.elements.menuItems.length) {
      this.focussedChild = this.elements.menuItems.length - 1;
      setParentChild(this);
    } else if (this.focusChild !== value) {
      this.focussedChild = value;
      setParentChild(this);
    }
  }

  set focusState(value) {
    isValidState({
      value
    });

    if (this.state !== value) {
      this.state = value;
    }

    if (this.elements.submenuToggles.length > 0 && (value === "self" || value === "none")) {
      this.elements.submenuToggles.forEach(toggle => {
        toggle.elements.controlledMenu.focusState = "none";
      });
    }

    if (this.elements.parentMenu && (value === "self" || value === "child")) {
      this.elements.parentMenu.focusState = "child";
    }
  }

  set currentEvent(value) {
    isValidEvent({
      value
    });

    if (this.event !== value) {
      this.event = value;

      if (this.elements.submenuToggles.length > 0) {
        this.elements.submenuToggles.forEach(submenuToggle => {
          submenuToggle.elements.controlledMenu.currentEvent = value;
        });
      }
    }
  }

  set hoverType(value) {
    isValidHoverType({
      value
    });

    if (this.hover !== value) {
      this.hover = value;
    }
  }

  set hoverDelay(value) {
    isValidType("number", {
      value
    });

    if (this.delay !== value) {
      this.delay = value;
    }
  }
  /**
   * Validates all aspects of the menu to ensure proper functionality.
   *
   * @returns {boolean} - The result of the validation.
   */


  validate() {
    const {
      domElements,
      domSelectors,
      menuElements,
      submenuOpenClass,
      submenuCloseClass,
      root,
      hover,
      delay
    } = this;
    let check = true;

    if (domElements.container !== null || domElements.controller !== null) {
      if (!isValidInstance(HTMLElement, {
        menuElement: domElements.menu,
        controllerElement: domElements.controller,
        containerElement: domElements.container
      })) {
        check = false;
      }
    } else if (!isValidInstance(HTMLElement, {
      menuElement: domElements.menu
    })) {
      check = false;
    }

    if (domSelectors.submenuItems !== "") {
      if (!isCSSSelector({
        menuItemSelector: domSelectors.menuItems,
        menuLinkSelector: domSelectors.menuLinks,
        submenuItemSelector: domSelectors.submenuItems,
        submenuToggleSelector: domSelectors.submenuToggles,
        submenuSelector: domSelectors.submenus
      })) {
        check = false;
      }
    } else if (!isCSSSelector({
      menuItemSelector: domSelectors.menuItems,
      menuLinkSelector: domSelectors.menuLinks
    })) {
      check = false;
    }

    if (submenuOpenClass !== "" && !isValidClassList({
      openClass: submenuOpenClass
    })) {
      check = false;
    }

    if (submenuCloseClass !== "" && !isValidClassList({
      closeClass: submenuCloseClass
    })) {
      check = false;
    }

    if (!isValidType("boolean", {
      isTopLevel: root
    })) {
      check = false;
    }

    if (menuElements.parentMenu !== null && !isValidInstance(BaseMenu, {
      parentMenu: menuElements.parentMenu
    })) {
      check = false;
    }

    if (!isValidHoverType({
      hoverType: hover
    })) {
      check = false;
    }

    if (!isValidType("number", {
      hoverDelay: delay
    })) {
      check = false;
    }

    return check;
  }
  /**
   * Sets DOM elements within the menu.
   *
   * This will set the actual `domElement` property, so all existing items in a
   * given `domElement` property will be removed when this is run.
   *
   * @param {string}      elementType - The type of element to populate.
   * @param {HTMLElement} base        - The element used as the base for the querySelect.
   * @param {Function}    filter      - A filter to use to narrow down the DOM elements selected.
   */


  setDOMElementType(elementType, base, filter) {
    if (typeof this.selectors[elementType] === "string") {
      if (base) isValidInstance(HTMLElement, {
        base
      });
      const baseElement = base || this.dom.menu;

      const baseFilter = item => item.parentElement === baseElement;

      const selector = this.selectors[elementType];
      const domElements = Array.from(baseElement.querySelectorAll(selector));

      if (typeof filter !== "undefined") {
        if (typeof filter === "function") {
          this.domElements[elementType] = domElements.filter(item => filter(item));
        } else {
          this.domElements[elementType] = domElements;
        }
      } else {
        this.domElements[elementType] = domElements.filter(item => baseFilter(item));
      }
    } else {
      throw new Error(`${elementType} is not a valid element type within the menu.`);
    }
  }
  /**
   * Adds an element to DOM elements within the menu.
   *
   * This is an additive function, so existing items in a given `domElement`
   * property will not be touched.
   *
   * @param {string}      elementType - The type of element to populate.
   * @param {HTMLElement} base        - The element used as the base for the querySelect.
   * @param {Function}    filter      - A filter to use to narrow down the DOM elements selected.
   */


  addDOMElementType(elementType, base, filter) {
    if (typeof this.selectors[elementType] === "string") {
      if (base) isValidInstance(HTMLElement, {
        base
      });
      const baseElement = base || this.dom.menu;

      const baseFilter = item => item.parentElement === baseElement;

      const selector = this.selectors[elementType];
      const domElements = Array.from(baseElement.querySelectorAll(selector));

      if (typeof filter !== "undefined") {
        if (typeof filter === "function") {
          this.domElements[elementType] = [...this.domElements[elementType], ...domElements.filter(item => filter(item))];
        } else {
          this.domElements[elementType] = [...this.domElements[elementType], ...domElements];
        }
      } else {
        this.domElements[elementType] = [...this.domElements[elementType], ...domElements.filter(item => baseFilter(item))];
      }
    } else {
      throw new Error(`${elementType} is not a valid element type within the menu.`);
    }
  }
  /**
   * Clears DOM elements within the menu.
   *
   * @param {string} elementType - The type of element to clear.
   */


  clearDOMElementType(elementType) {
    if (elementType === "menu") return;

    if (Array.isArray(this.domElements[elementType])) {
      this.domElements[elementType] = [];
    } else if (typeof this.domElements[elementType] !== "undefined") {
      this.domElements[elementType] = null;
    } else {
      throw new Error(`${elementType} is not a valid element type within the menu.`);
    }
  }
  /**
   * Sets all DOM elements within the menu.
   *
   * Utiliizes {@link BaseMenu#setDOMElementType|setDOMElementType},
   * {@link BaseMenu#clearDOMElementType|clearDOMElementType},
   * and {@link BaseMenu#addDOMElementType|addDOMElementType}.
   */


  setDOMElements() {
    this.setDOMElementType("menuItems");

    if (this.selectors.submenuItems !== "") {
      this.setDOMElementType("submenuItems");
      this.clearDOMElementType("submenuToggles");
      this.clearDOMElementType("submenus");
      this.dom.submenuItems.forEach(item => {
        this.addDOMElementType("submenuToggles", item);
        this.addDOMElementType("submenus", item);
      });
    }
  }
  /**
   * Finds the root menu element.
   *
   * @param {BaseMenu} menu - The menu to check.
   */


  findRootMenu(menu) {
    if (menu.isTopLevel) {
      this.menuElements.rootMenu = menu;
    } else if (menu.elements.parentMenu !== null) {
      this.findRootMenu(menu.elements.parentMenu);
    } else {
      throw new Error("Cannot find root menu.");
    }
  }
  /**
   * Creates and initializes all menu items and submenus.
   */


  createChildElements() {
    const {
      MenuType,
      MenuItemType,
      MenuToggleType
    } = this;
    this.dom.menuItems.forEach(element => {
      let menuItem;

      if (this.dom.submenuItems.includes(element)) {
        // The menu's toggle controller DOM element.
        const toggler = element.querySelector(this.selectors.submenuToggles); // The actual menu DOM element.

        const submenu = element.querySelector(this.selectors.submenus); // Create the new menu and initialize it.

        const menu = new MenuType({
          menuElement: submenu,
          menuItemSelector: this.selectors.menuItems,
          menuLinkSelector: this.selectors.menuLinks,
          submenuItemSelector: this.selectors.submenuItems,
          submenuToggleSelector: this.selectors.submenuToggles,
          submenuSelector: this.selectors.submenus,
          openClass: this.openClass,
          closeClass: this.closeClass,
          isTopLevel: false,
          parentMenu: this,
          hoverType: this.hoverType,
          hoverDelay: this.hoverDelay
        }); // Create the new menu toggle.

        const toggle = new MenuToggleType({
          menuToggleElement: toggler,
          parentElement: element,
          controlledMenu: menu,
          parentMenu: this
        }); // Add the toggle to the list of toggles.

        this.menuElements.submenuToggles.push(toggle); // Create a new menu item.

        menuItem = new MenuItemType({
          menuItemElement: element,
          menuLinkElement: toggler,
          parentMenu: this,
          isSubmenuItem: true,
          childMenu: menu,
          toggle
        });
      } else {
        const link = element.querySelector(this.selectors.menuLinks); // Create a new menu item.

        menuItem = new MenuItemType({
          menuItemElement: element,
          menuLinkElement: link,
          parentMenu: this
        });
      }

      this.menuElements.menuItems.push(menuItem);
    });
  }
  /**
   * Handles focus events throughout the menu for proper menu use.
   *
   * - Adds a `focus` listener to every menu item so when it gains focus,
   *   it will set the item's containing menu's {@link BaseMenu#focusState|focus state}
   *   to "self".
   */


  handleFocus() {
    this.elements.menuItems.forEach((menuItem, index) => {
      menuItem.dom.link.addEventListener("focus", () => {
        this.focusState = "self";
        this.currentChild = index;
      });
    });
  }
  /**
   * Handles click events throughout the menu for proper use.
   *
   * Depending on what is supported either `touchstart` and `touchend` or
   * `mousedown` and `mouseup` will be used for all "click" event handling.
   *
   * - Adds a `touchend`/`mouseup` listener to the document so if the user clicks
   *   outside of the menu when it is open, the menu will close.
   * - Adds a `touchstart`/`mousedown` listener to every menu item that will blur
   *   all menu items in the entire menu structure (starting at the root menu) and
   *   then properly focus the clicked item.
   * - Adds a `touchend`/`mouseup` listener to every submenu item that will properly
   *   toggle the submenu open/closed.
   * - Adds a `touchend`/`mouseup` listener to the menu's controller
   *   (if the menu is the root menu) so when it is clicked it will properly
   *   toggle open/closed.
   */


  handleClick() {
    // Use touch over mouse events when supported.
    const startEventType = isEventSupported("touchstart", this.dom.menu) ? "touchstart" : "mousedown";
    const endEventType = isEventSupported("touchend", this.dom.menu) ? "touchend" : "mouseup";
    /**
     * Toggles a toggle element.
     *
     * @param {BaseMenu}       menu   - This menu.
     * @param {BaseMenuToggle} toggle - The menu toggle
     * @param {Event}          event  - A Javascript event.
     */

    function toggleToggle(menu, toggle, event) {
      preventEvent(event);
      toggle.toggle();

      if (toggle.isOpen) {
        menu.focusState = "self";
        toggle.elements.controlledMenu.focusState = "none";
      }
    }

    this.elements.menuItems.forEach((item, index) => {
      // Properly focus the current menu item.
      item.dom.link.addEventListener(startEventType, () => {
        this.currentEvent = "mouse";
        this.elements.rootMenu.blurChildren();
        this.focusChild(index);
      }); // Properly toggle submenus open and closed.

      if (item.isSubmenuItem) {
        item.elements.toggle.dom.toggle[`on${endEventType}`] = event => {
          this.currentEvent = "mouse";
          toggleToggle(this, item.elements.toggle, event);
        };
      }
    }); // Open the this menu if it's controller is clicked.

    if (this.isTopLevel && this.elements.controller) {
      this.elements.controller.dom.toggle[`on${endEventType}`] = event => {
        this.currentEvent = "mouse";
        toggleToggle(this, this.elements.controller, event);
      };
    }
  }
  /**
   * Handles hover events throughout the menu for proper use.
   *
   * Adds `mouseenter` listeners to all menu items and `mouseleave` listeners
   * to all submenu items which function differently depending on
   * the menu's {@link BaseMenu#hoverType|hover type}.
   *
   * **Hover Type "on"**
   * - When a `mouseenter` event triggers on any menu item the menu's
   *   {@link BaseMenu#currentChild| current child} value will change to that
   *   menu item.
   * - When a `mouseenter` event triggers on a submenu item the
   *   {@link BaseMenuToggle#preview|preview method} for the submenu item's
   *   toggle will be called.
   * - When a `mouseleave` event triggers on an open submenu item the
   *   {@link BaseMenuToggle#close|close method} for the submenu item's toggle
   *   will be called after a delay set by the menu's {@link BaseMenu#hoverDelay|hover delay}.
   *
   * **Hover Type "dynamic"**
   * - When a `mouseenter` event triggers on any menu item the menu's
   *   current child value will change to that menu item.
   * - When a `mouseenter` event triggers on any menu item, and the menu's
   *   {@link BaseMenu#focusState|focus state} is not "none", the menu item
   *   will be focused.
   * - When a `mouseenter` event triggers on a submenu item, and a submenu is
   *   already open, the preview method for the submenu item's toggle will be called.
   * - When a `mouseenter` event triggers on a submenu item, and no submenu is
   *   open, no submenu-specific methods will be called.
   * - When a `mouseleave` event triggers on an open submenu item that is not a
   *   root-level submenu item the close method for the submenu item's toggle
   *   will be called and the submenu item will be focused after a delay set by
   *   the menu's hover delay.
   * - When a `mouseleave` event triggers on an open submenu item that is a
   *   root-level submenu item no submenu-specific methods will be called.
   *
   * **Hover Type "off"**
   * All `mouseenter` and `mouseleave` events are ignored.
   */


  handleHover() {
    this.elements.menuItems.forEach((menuItem, index) => {
      menuItem.dom.link.addEventListener("mouseenter", () => {
        if (this.hoverType === "on") {
          this.currentEvent = "mouse";
          this.currentChild = index;

          if (menuItem.isSubmenuItem) {
            menuItem.elements.toggle.preview();
          }
        } else if (this.hoverType === "dynamic") {
          const isOpen = this.elements.submenuToggles.some(toggle => toggle.isOpen);
          this.currentChild = index;

          if (!this.isTopLevel || this.focusState !== "none") {
            this.currentEvent = "mouse";
            this.focusCurrentChild();
          }

          if (menuItem.isSubmenuItem && (!this.isTopLevel || isOpen)) {
            this.currentEvent = "mouse";
            menuItem.elements.toggle.preview();
          }
        }
      });

      if (menuItem.isSubmenuItem) {
        menuItem.dom.item.addEventListener("mouseleave", () => {
          if (this.hoverType === "on") {
            if (this.hoverDelay > 0) {
              setTimeout(() => {
                this.currentEvent = "mouse";
                menuItem.elements.toggle.close();
              }, this.hoverDelay);
            } else {
              this.currentEvent = "mouse";
              menuItem.elements.toggle.close();
            }
          } else if (this.hoverType === "dynamic") {
            if (!this.isTopLevel) {
              if (this.hoverDelay > 0) {
                setTimeout(() => {
                  this.currentEvent = "mouse";
                  menuItem.elements.toggle.close();
                  this.focusCurrentChild();
                }, this.hoverDelay);
              } else {
                this.currentEvent = "mouse";
                menuItem.elements.toggle.close();
                this.focusCurrentChild();
              }
            }
          }
        });
      }
    });
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assit the {@link BaseMenu#handleKeyup|handleKeyup method}.
   *
   * - Adds a `keydown` listener to the menu's controller (if the menu is the root menu).
   *   - Blocks propagation on "Space", "Enter", and "Escape" keys.
   */


  handleKeydown() {
    if (this.isTopLevel && this.elements.controller) {
      this.elements.controller.dom.toggle.addEventListener("keydown", event => {
        this.currentEvent = "keyboard";
        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
        }
      });
    }
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * - Adds a `keyup` listener to the menu's controller (if the menu is the root menu).
   *   - Opens the menu when the user hits "Space" or "Enter".
   */


  handleKeyup() {
    if (this.isTopLevel && this.elements.controller) {
      this.elements.controller.dom.toggle.addEventListener("keyup", event => {
        this.currentEvent = "keyboard";
        const key = keyPress(event);

        if (key === "Space" || key === "Enter") {
          preventEvent(event);
          this.elements.controller.open();
          this.focusFirstChild();
        }
      });
    }
  }
  /**
   * Focus the menu.
   *
   * Sets the menu's {@link BaseMenu#focusState|focus state} to "self" and
   * focusses the menu if the menu's {@link BaseMenu#shouldFocus|shouldFocus}
   * value is `true`.
   */


  focus() {
    this.focusState = "self";

    if (this.shouldFocus) {
      this.dom.menu.focus();
    }
  }
  /**
   * Unfocus the menu.
   *
   * Sets the menu's {@link BaseMenu#focusState|focus state} to "none"
   * and blurs the menu if the menu's {@link BaseMenu#shouldFocus|shouldFocus}
   * vallue is `true`.
   */


  blur() {
    this.focusState = "none";

    if (this.shouldFocus) {
      this.dom.menu.blur();
    }
  }
  /**
   * Focus the menu's current child.
   */


  focusCurrentChild() {
    this.focusState = "self";

    if (this.currentChild !== -1) {
      this.currentMenuItem.focus();
    }
  }
  /**
   * Focuses the menu's child at a given index.
   *
   * @param {number} index - The index of the child to focus.
   */


  focusChild(index) {
    this.blurCurrentChild();
    this.currentChild = index;
    this.focusCurrentChild();
  }
  /**
   * Focues the menu's first child.
   */


  focusFirstChild() {
    this.focusChild(0);
  }
  /**
   * Focus the menu's last child.
   */


  focusLastChild() {
    this.focusChild(this.elements.menuItems.length - 1);
  }
  /**
   * Focus the menu's next child.
   */


  focusNextChild() {
    if (this.currentChild < this.elements.menuItems.length - 1) {
      this.focusChild(this.currentChild + 1);
    } else {
      this.focusCurrentChild();
    }
  }
  /**
   * Focus the menu's previous child.
   */


  focusPreviousChild() {
    if (this.currentChild > 0) {
      this.focusChild(this.currentChild - 1);
    } else {
      this.focusCurrentChild();
    }
  }
  /**
   * Blurs the menu's current child.
   */


  blurCurrentChild() {
    this.focusState = "none";

    if (this.currentChild !== -1) {
      this.currentMenuItem.blur();
    }
  }
  /**
   * Focus the menu's controller.
   */


  focusController() {
    if (this.dom.controller) {
      if (this.shouldFocus) {
        this.dom.controller.focus();
      }

      this.focusState = "none";
    }
  }
  /**
   * Focus the menu's container.
   */


  focusContainer() {
    if (this.dom.container) {
      if (this.shouldFocus) {
        this.dom.container.focus();
      }

      this.focusState = "none";
    }
  }
  /**
   * Close all submenu children.
   */


  closeChildren() {
    this.elements.submenuToggles.forEach(toggle => toggle.close());
  }
  /**
   * Blurs all children and submenu's children.
   */


  blurChildren() {
    this.elements.menuItems.forEach(menuItem => {
      menuItem.blur();

      if (menuItem.isSubmenuItem) {
        menuItem.elements.childMenu.blurChildren();
      }
    });
  }

}

/* eslint-disable jsdoc/no-undefined-types */
/**
 * A basic navigation link contained inside of a {@link DisclousreMenu}.
 *
 * @extends BaseMenuItem
 */

class DisclosureMenuItem extends BaseMenuItem {
  /**
   * @inheritdoc
   *
   * @param {object}                    options                         - The options for generating the menu item.
   * @param {HTMLElement}               options.menuItemElement         - The menu item in the DOM.
   * @param {HTMLElement}               options.menuLinkElement         - The menu item's link in the DOM.
   * @param {DisclosureMenu}            options.parentMenu              - The parent menu.
   * @param {boolean}                   [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
   * @param {DisclosureMenu|null}       [options.childMenu = null]      - The child menu.
   * @param {DisclosureMenuToggle|null} [options.toggle = null]         - The controller for the child menu.
   * @param {boolean}                   [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
   */
  constructor({
    menuItemElement,
    menuLinkElement,
    parentMenu,
    isSubmenuItem = false,
    childMenu = null,
    toggle = null,
    initialize = true
  }) {
    super({
      menuItemElement,
      menuLinkElement,
      parentMenu,
      isSubmenuItem,
      childMenu,
      toggle
    });

    if (initialize) {
      this.initialize();
    }
  }

}

/* eslint-disable jsdoc/no-undefined-types */
/**
 * A link or button that controls the visibility of a {@link DisclousreMenu}.
 *
 * @extends BaseMenuToggle
 */

class DisclosureMenuToggle extends BaseMenuToggle {
  /**
   * @inheritdoc
   *
   * @param {object}              options                     - The options for generating the menu toggle.
   * @param {HTMLElement}         options.menuToggleElement   - The toggle element in the DOM.
   * @param {HTMLElement}         options.parentElement       - The element containing the controlled menu.
   * @param {DisclosureMenu}      options.controlledMenu      - The menu controlled by this toggle.
   * @param {DisclosureMenu|null} [options.parentMenu = null] - The menu containing this toggle.
   * @param {boolean}             [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
   */
  constructor({
    menuToggleElement,
    parentElement,
    controlledMenu,
    parentMenu = null,
    initialize = true
  }) {
    super({
      menuToggleElement,
      parentElement,
      controlledMenu,
      parentMenu
    });

    if (initialize) {
      this.initialize();
    }
  }
  /**
   * Opens the controlled menu.
   *
   * Calls the {@link DisclosureMenuToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#open|BaseMenuToggle's open method}.
   */


  open() {
    // Close all siblings.
    this.closeSiblings();
    super.open();
  }
  /**
   * Opens the controlled menu without the current focus entering it.
   *
   * Calls the {@link DisclosureMenuToggle#closeSiblings| closeSiblings method}
   * and _then_ {@link BaseMenuToggle#preview|BaseMenuToggle's preview method}.
   */


  preview() {
    // Close all siblings.
    this.closeSiblings();
    super.preview();
  }
  /**
   * Closes the controlled menu.
   *
   * Calls the {@link DisclosureMenuToggle#closeChildren| closeChildren method}
   * and _then_ {@link BaseMenuToggle#close|BaseMenuToggle's close method}.
   */


  close() {
    if (this.isOpen) {
      // Close all children.
      this.closeChildren();
    }

    super.close();
  }

}

/**
 * An accessible disclosure menu in the DOM.
 *
 * See {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html|Example Disclosure for Navigation Menus}
 *
 * @extends BaseMenu
 */

class DisclosureMenu extends BaseMenu {
  /**
   * @inheritdoc
   *
   * @param {object}                 options                              - The options for generating the menu.
   * @param {HTMLElement}            options.menuElement                  - The menu element in the DOM.
   * @param {string}                 [options.menuItemSelector = li]      - The CSS selector string for menu items.
   * @param {string}                 [options.menuLinkSelector = a]       - The CSS selector string for menu links.
   * @param {string}                 [options.submenuItemSelector]        - The CSS selector string for menu items containing submenus.
   * @param {string}                 [options.submenuToggleSelector = a]  - The CSS selector string for submenu toggle buttons/links.
   * @param {string}                 [options.submenuSelector = ul]       - The CSS selector string for submenus.
   * @param {(HTMLElement|null)}     [options.controllerElement = null]   - The element controlling the menu in the DOM.
   * @param {(HTMLElement|null)}     [options.containerElement = null]    - The element containing the menu in the DOM.
   * @param {(string|string[]|null)} [options.openClass = show]           - The class to apply when a menu is "open".
   * @param {(string|string[]|null)} [options.closeClass = hide]          - The class to apply when a menu is "closed".
   * @param {boolean}                [options.isTopLevel = false]         - A flag to mark the root menu.
   * @param {(DisclosureMenu|null)}  [options.parentMenu = null]          - The parent menu to this menu.
   * @param {string}                 [options.hoverType = off]            - The type of hoverability a menu has.
   * @param {number}                 [options.hoverDelay = 250]           - The delay for closing menus if the menu is hoverable (in miliseconds).
   * @param {boolean}                [options.optionalKeySupport = false] - A flag to add optional keyboard support (Arrow keys, Home, and End) to the menu.
   * @param {boolean}                [options.initialize = true]          - A flag to initialize the menu immediately upon creation.
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
    optionalKeySupport = false,
    initialize = true
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
      hoverDelay
    }); // Set default class types.

    this.MenuType = DisclosureMenu;
    this.MenuItemType = DisclosureMenuItem;
    this.MenuToggleType = DisclosureMenuToggle;
    this.currentChild = -1;
    this.optionalKeySupport = optionalKeySupport;

    if (initialize) {
      this.initialize();
    }
  }
  /**
   * A flag to add optional keyboard support (Arrow keys, "Home", and "End") to the menu.
   *
   * This functions differently for root vs. submenus.
   * Submenus will always inherit their root menu's optionalKeySupport.
   *
   * @type {boolean}
   */


  get optionalKeySupport() {
    return this.isTopLevel ? this.optionalSupport : this.elements.rootMenu.optionalKeySupport;
  }

  set optionalKeySupport(value) {
    isValidType("boolean", {
      optionalKeySupport: value
    });
    this.optionalSupport = value;
  }
  /**
   * Initializes the menu.
   *
   * Initialize will call the {@link BaseMenu#initialize|BaseMenu's initialize method}
   * as well as set up {@link DisclosureMenu#handleFocus|focus},
   * {@link DisclosureMenu#handleClick|click},
   * {@link DisclosureMenu#handleHover|hover},
   * {@link DisclosureMenu#handleKeydown|keydown}, and
   * {@link DisclosureMenu#handleKeyup|keyup} events for the menu.
   *
   * If the BaseMenu's initialize method throws an error,
   * this will catch it and log it to the console.
   */


  initialize() {
    try {
      super.initialize();
      this.handleFocus();
      this.handleClick();
      this.handleHover();
      this.handleKeydown();
      this.handleKeyup();
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * Handles click events throughout the menu for proper use.
   *
   * Depending on what is supported either `touchstart` and `touchend` or
   * `mousedown` and `mouseup` will be used for all "click" event handling.
   *
   * - Adds all event listeners listed in
   *   {@link BaseMenu#handleClick|BaseMenu's handleClick method}, and
   * - adds a `touchend`/`mouseup` listener to the `document` so if the user
   *   clicks outside of the menu it will close if it is open.
   *
   */


  handleClick() {
    super.handleClick(); // Use touch over mouse events when supported.

    const endEventType = isEventSupported("touchend", this.dom.menu) ? "touchend" : "mouseup"; // Close the menu if a click event happens outside of it.

    document.addEventListener(endEventType, event => {
      if (this.focusState !== "none") {
        this.currentEvent = "mouse";

        if (!this.dom.menu.contains(event.target) && !this.dom.menu !== event.target) {
          this.closeChildren();
          this.blur();

          if (this.elements.controller) {
            this.elements.controller.close();
          }
        }
      }
    });
  }
  /**
   * Handles keydown events throughout the menu for proper menu use.
   *
   * This method exists to assist the {@link DisclosureMenu#handleKeyup|handleKeyup method}.
   * - Adds all `keydown` listeners from {@link BaseMenu#handleKeydown|BaseMenu's handleKeydown method}
   * - Adds a `keydown` listener to the menu/all submenus.
   *   - Blocks propagation on the following keys: "Space", "Enter", and "Escape".
   *   - _If_ {@link DisclosureMenu#optionalKeySupport|optional keyboard support}
   *     is enabled, blocks propagation on the following keys:
   *     "ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", and "End".
   */


  handleKeydown() {
    super.handleKeydown();
    this.dom.menu.addEventListener("keydown", event => {
      this.currentEvent = "keyboard";
      const key = keyPress(event); // Prevent default event actions if we're handling the keyup event.

      if (this.focusState === "self") {
        const submenuKeys = ["Space", "Enter"];
        const controllerKeys = ["Escape"];
        const parentKeys = ["Escape"];

        if (this.optionalKeySupport) {
          const keys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft", "Home", "End"];

          if (keys.includes(key)) {
            preventEvent(event);
          }
        } else if (this.currentMenuItem.isSubmenuItem && submenuKeys.includes(key)) {
          preventEvent(event);
        } else if (this.elements.controller && controllerKeys.includes(key)) {
          preventEvent(event);
        } else if (this.elements.parentMenu && parentKeys.includes(key)) {
          preventEvent(event);
        }
      }
    });
  }
  /**
   * Handles keyup events throughout the menu for proper menu use.
   *
   * Adds all `keyup` listeners from {@link BaseMenu#handleKeyup|BaseMenu's handleKeyup method}.
   *
   * Adds the following keybindings (explanations are taken from the
   * {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html#kbd_label|WAI ARIA Pracitices Example Disclosure for Navigation Menus}):
   *
   * | Key | Function |
   * | --- | --- |
   * | _Tab_ or _Shift + Tab_ | Move keyboard focus among top-level buttons, and if a dropdown is open, into and through links in the dropdown. |
   * | _Space_ or _Enter_ | <ul><li>If focus is on a disclosure button, activates the button, which toggles the visibility of the dropdown.</li><li>If focus is on a link:<ul><li>If any link has aria-current set, removes it.</li><li>Sets aria-current="page" on the focused link.</li><li>Activates the focused link.</li></ul></li></ul> |
   * | _Escape_ | If a dropdown is open, closes it and sets focus on the button that controls that dropdown. |
   * | _Down Arrow_ or _Right Arrow_ (Optional}) | <ul><li>If focus is on a button and its dropdown is collapsed, and it is not the last button, moves focus to the next button.</li><li>if focus is on a button and its dropdown is expanded, moves focus to the first link in the dropdown.</li><li>If focus is on a link, and it is not the last link, moves focus to the next link.</li></ul> |
   * | _Up Arrow_ or _Left Arrow_ (Optional}) | <ul><li>If focus is on a button, and it is not the first button, moves focus to the previous button.</li><li>If focus is on a link, and it is not the first link, moves focus to the previous link.</li></ul> |
   * | _Home_ (Optional}) | <ul><li>If focus is on a button, and it is not the first button, moves focus to the first button.</li><li>If focus is on a link, and it is not the first link, moves focus to the first link.</li></ul> |
   * | _End_ (Optional}) | <ul><li>If focus is on a button, and it is not the last button, moves focus to the last button.</li><li>If focus is on a link, and it is not the last link, moves focus to the last link.</li></ul> |
   *
   * The optional keybindings are controlled by the menu's {@link DisclosureMenu#optionalKeySupport|optionalKeySupport} value.
   */


  handleKeyup() {
    super.handleKeyup();
    this.dom.menu.addEventListener("keyup", event => {
      this.currentEvent = "keyboard";
      const key = keyPress(event);

      if (this.focusState === "self") {
        if (key === "Space" || key === "Enter") {
          // Hitting Space or Enter:
          // - If focus is on a disclosure button, activates the button, which toggles the visibility of the dropdown.
          if (this.currentMenuItem.isSubmenuItem) {
            preventEvent(event);
            this.currentMenuItem.elements.toggle.preview();
          } else {
            this.currentMenuItem.dom.link.click();
          }
        } else if (key === "Escape") {
          // Hitting Escape
          // - If a dropdown is open, closes it.
          // - If was within the closed dropdown, sets focus on the button that controls that dropdown.
          const hasOpenChild = this.elements.submenuToggles.some(toggle => toggle.isOpen);

          if (hasOpenChild) {
            preventEvent(event);
            this.closeChildren();
          } else if (this.elements.parentMenu) {
            preventEvent(event);
            this.elements.parentMenu.currentEvent = this.currentEvent;
            this.elements.parentMenu.closeChildren();
            this.elements.parentMenu.focusCurrentChild();
          } else if (this.isTopLevel && this.elements.controller && this.elements.controller.isOpen) {
            this.elements.controller.close();
            this.focusController();
          }
        } else if (this.optionalKeySupport) {
          if (key === "ArrowDown" || key === "ArrowRight") {
            // Hitting the Down or Right Arrow:
            // - If focus is on a button and its dropdown is collapsed, and it is not the last button, moves focus to the next button.
            // - If focus is on a button and its dropdown is expanded, moves focus to the first link in the dropdown.
            // - If focus is on a link, and it is not the last link, moves focus to the next link.
            preventEvent(event);

            if (this.currentMenuItem.isSubmenuItem && this.currentMenuItem.elements.toggle.isOpen) {
              this.currentMenuItem.elements.childMenu.currentEvent = "keyboard";
              this.currentMenuItem.elements.childMenu.focusFirstChild();
            } else {
              this.focusNextChild();
            }
          } else if (key === "ArrowUp" || key === "ArrowLeft") {
            // Hitting the Up or Left Arrow:
            // - If focus is on a button, and it is not the first button, moves focus to the previous button.
            // - If focus is on a link, and it is not the first link, moves focus to the previous link.
            preventEvent(event);
            this.focusPreviousChild();
          } else if (key === "Home") {
            // Hitting Home:
            // - If focus is on a button, and it is not the first button, moves focus to the first button.
            // - If focus is on a link, and it is not the first link, moves focus to the first link.
            preventEvent(event);
            this.focusFirstChild();
          } else if (key === "End") {
            // Hitting End:
            // - If focus is on a button, and it is not the last button, moves focus to the last button.
            // - If focus is on a link, and it is not the last link, moves focus to the last link.
            preventEvent(event);
            this.focusLastChild();
          }
        }
      }
    });
  }

}

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }
/**
 * A basic navigation link contained inside of a Bootstrap4DisclosureMenu.
 */

var Bootstrap4DisclosureMenuItem = /*#__PURE__*/function (_DisclosureMenuItem) {
  _inherits$2(Bootstrap4DisclosureMenuItem, _DisclosureMenuItem);

  var _super = _createSuper$2(Bootstrap4DisclosureMenuItem);

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
  function Bootstrap4DisclosureMenuItem(_ref) {
    var _this;

    var menuItemElement = _ref.menuItemElement,
        menuLinkElement = _ref.menuLinkElement,
        parentMenu = _ref.parentMenu,
        _ref$isSubmenuItem = _ref.isSubmenuItem,
        isSubmenuItem = _ref$isSubmenuItem === void 0 ? false : _ref$isSubmenuItem,
        _ref$childMenu = _ref.childMenu,
        childMenu = _ref$childMenu === void 0 ? null : _ref$childMenu,
        _ref$toggle = _ref.toggle,
        toggle = _ref$toggle === void 0 ? null : _ref$toggle,
        _ref$initialize = _ref.initialize,
        initialize = _ref$initialize === void 0 ? true : _ref$initialize;

    _classCallCheck$2(this, Bootstrap4DisclosureMenuItem);

    _this = _super.call(this, {
      menuItemElement: menuItemElement,
      menuLinkElement: menuLinkElement,
      parentMenu: parentMenu,
      isSubmenuItem: isSubmenuItem,
      childMenu: childMenu,
      toggle: toggle,
      initialize: false
    });

    if (initialize) {
      _this.initialize();
    }

    return _this;
  }

  return Bootstrap4DisclosureMenuItem;
}(DisclosureMenuItem);

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf$1(object); if (object === null) break; } return object; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }
/*
 * A link or button that controls the visibility of a Bootstrap4DisclosureMenu.
 */

var Bootstrap4DisclosureMenuToggle = /*#__PURE__*/function (_DisclosureMenuToggle) {
  _inherits$1(Bootstrap4DisclosureMenuToggle, _DisclosureMenuToggle);

  var _super = _createSuper$1(Bootstrap4DisclosureMenuToggle);

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
  function Bootstrap4DisclosureMenuToggle(_ref) {
    var _this;

    var menuToggleElement = _ref.menuToggleElement,
        parentElement = _ref.parentElement,
        controlledMenu = _ref.controlledMenu,
        _ref$parentMenu = _ref.parentMenu,
        parentMenu = _ref$parentMenu === void 0 ? null : _ref$parentMenu,
        _ref$initialize = _ref.initialize,
        initialize = _ref$initialize === void 0 ? true : _ref$initialize;

    _classCallCheck$1(this, Bootstrap4DisclosureMenuToggle);

    _this = _super.call(this, {
      menuToggleElement: menuToggleElement,
      parentElement: parentElement,
      controlledMenu: controlledMenu,
      parentMenu: parentMenu,
      initialize: false
    }); // Set the container for the toggle.
    // This differs based on if the menu is top-level or not.

    _this.domElements.container = controlledMenu.isTopLevel ? controlledMenu.dom.container : controlledMenu.dom.menu;

    if (initialize) {
      _this.initialize();
    }

    return _this;
  }
  /**
   * Initializes the toggle by removing the default bootstrap toggle information
   * and running the parent's initialization.
   */


  _createClass(Bootstrap4DisclosureMenuToggle, [{
    key: "initialize",
    value: function initialize() {
      _get(_getPrototypeOf$1(Bootstrap4DisclosureMenuToggle.prototype), "initialize", this).call(this);

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

  }, {
    key: "expand",
    value: function expand() {
      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$elements$contro = this.elements.controlledMenu,
          closeClass = _this$elements$contro.closeClass,
          openClass = _this$elements$contro.openClass;
      this.dom.toggle.setAttribute("aria-expanded", "true"); // Add the open class

      if (openClass !== "") {
        if (typeof openClass === "string") {
          this.dom.container.classList.add(openClass);
        } else {
          var _this$dom$container$c;

          (_this$dom$container$c = this.dom.container.classList).add.apply(_this$dom$container$c, _toConsumableArray(openClass));
        }
      } // Remove the close class.


      if (closeClass !== "") {
        if (typeof closeClass === "string") {
          this.dom.container.classList.remove(closeClass);
        } else {
          var _this$dom$container$c2;

          (_this$dom$container$c2 = this.dom.container.classList).remove.apply(_this$dom$container$c2, _toConsumableArray(closeClass));
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

  }, {
    key: "collapse",
    value: function collapse() {
      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var _this$elements$contro2 = this.elements.controlledMenu,
          closeClass = _this$elements$contro2.closeClass,
          openClass = _this$elements$contro2.openClass;
      this.dom.toggle.setAttribute("aria-expanded", "false"); // Add the close class

      if (closeClass !== "") {
        if (typeof closeClass === "string") {
          this.dom.container.classList.add(closeClass);
        } else {
          var _this$dom$container$c3;

          (_this$dom$container$c3 = this.dom.container.classList).add.apply(_this$dom$container$c3, _toConsumableArray(closeClass));
        }
      } // Remove the open class.


      if (openClass !== "") {
        if (typeof openClass === "string") {
          this.dom.container.classList.remove(openClass);
        } else {
          var _this$dom$container$c4;

          (_this$dom$container$c4 = this.dom.container.classList).remove.apply(_this$dom$container$c4, _toConsumableArray(openClass));
        }
      }

      if (emit) {
        this.dom.toggle.dispatchEvent(this.collapseEvent);
      }
    }
  }]);

  return Bootstrap4DisclosureMenuToggle;
}(DisclosureMenuToggle);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * An accessible disclosure menu in the DOM using Bootstrap 4.
 *
 * See https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html
 */

var Bootstrap4DisclosureMenu = /*#__PURE__*/function (_DisclosureMenu) {
  _inherits(Bootstrap4DisclosureMenu, _DisclosureMenu);

  var _super = _createSuper(Bootstrap4DisclosureMenu);

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
  function Bootstrap4DisclosureMenu(_ref) {
    var _this;

    var menuElement = _ref.menuElement,
        _ref$menuItemSelector = _ref.menuItemSelector,
        menuItemSelector = _ref$menuItemSelector === void 0 ? "li" : _ref$menuItemSelector,
        _ref$menuLinkSelector = _ref.menuLinkSelector,
        menuLinkSelector = _ref$menuLinkSelector === void 0 ? "a" : _ref$menuLinkSelector,
        _ref$submenuItemSelec = _ref.submenuItemSelector,
        submenuItemSelector = _ref$submenuItemSelec === void 0 ? "" : _ref$submenuItemSelec,
        _ref$submenuToggleSel = _ref.submenuToggleSelector,
        submenuToggleSelector = _ref$submenuToggleSel === void 0 ? "a" : _ref$submenuToggleSel,
        _ref$submenuSelector = _ref.submenuSelector,
        submenuSelector = _ref$submenuSelector === void 0 ? "ul" : _ref$submenuSelector,
        _ref$controllerElemen = _ref.controllerElement,
        controllerElement = _ref$controllerElemen === void 0 ? null : _ref$controllerElemen,
        _ref$containerElement = _ref.containerElement,
        containerElement = _ref$containerElement === void 0 ? null : _ref$containerElement,
        _ref$openClass = _ref.openClass,
        openClass = _ref$openClass === void 0 ? "show" : _ref$openClass,
        _ref$closeClass = _ref.closeClass,
        closeClass = _ref$closeClass === void 0 ? "" : _ref$closeClass,
        _ref$isTopLevel = _ref.isTopLevel,
        isTopLevel = _ref$isTopLevel === void 0 ? true : _ref$isTopLevel,
        _ref$parentMenu = _ref.parentMenu,
        parentMenu = _ref$parentMenu === void 0 ? null : _ref$parentMenu,
        _ref$hoverType = _ref.hoverType,
        hoverType = _ref$hoverType === void 0 ? "off" : _ref$hoverType,
        _ref$hoverDelay = _ref.hoverDelay,
        hoverDelay = _ref$hoverDelay === void 0 ? 250 : _ref$hoverDelay,
        _ref$optionalKeySuppo = _ref.optionalKeySupport,
        optionalKeySupport = _ref$optionalKeySuppo === void 0 ? false : _ref$optionalKeySuppo,
        _ref$initialize = _ref.initialize,
        initialize = _ref$initialize === void 0 ? true : _ref$initialize;

    _classCallCheck(this, Bootstrap4DisclosureMenu);

    _this = _super.call(this, {
      menuElement: menuElement,
      menuItemSelector: menuItemSelector,
      menuLinkSelector: menuLinkSelector,
      submenuItemSelector: submenuItemSelector,
      submenuToggleSelector: submenuToggleSelector,
      submenuSelector: submenuSelector,
      controllerElement: controllerElement,
      containerElement: containerElement,
      openClass: openClass,
      closeClass: closeClass,
      isTopLevel: isTopLevel,
      parentMenu: parentMenu,
      hoverType: hoverType,
      hoverDelay: hoverDelay,
      optionalKeySupport: optionalKeySupport,
      initialize: false
    }); // Set default class types.

    _this.MenuType = Bootstrap4DisclosureMenu;
    _this.MenuItemType = Bootstrap4DisclosureMenuItem;
    _this.MenuToggleType = Bootstrap4DisclosureMenuToggle;

    if (initialize) {
      _this.initialize();
    }

    return _this;
  }

  return Bootstrap4DisclosureMenu;
}(DisclosureMenu);

export default Bootstrap4DisclosureMenu;
//# sourceMappingURL=disclosure-menu-bs4.esm.js.map