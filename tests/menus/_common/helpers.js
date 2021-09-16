/**
 * Various help functions for testing.
 */

/**
 * Simulates a mouse event on a DOM element.
 *
 * @param {string}      eventType - The type of event to trigger.
 * @param {HTMLElement} element   - The element to trigger the event on.
 * @param {object}      options   - Custom options for the event.
 */
export function simulateMouseEvent(eventType, element, options = {}) {
  try {
    const event = new MouseEvent(eventType, {
      view: window,
      bubbles: true,
      cancelable: true,
      ...options,
    });
    element.dispatchEvent(event);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Simulates a touch event on a DOM element.
 *
 * @param {string}      eventType - The type of event to trigger.
 * @param {HTMLElement} element   - The element to trigger the event on.
 * @param {object}      options   - Custom options for the event.
 */
export function simulateTouchEvent(eventType, element, options = {}) {
  try {
    const event = new TouchEvent(eventType, {
      view: window,
      bubbles: true,
      cancelable: true,
      ...options,
    });
    element.dispatchEvent(event);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Simulates a keyboard event on a DOM element.
 *
 * @param {string}      eventType - The type of event to trigger.
 * @param {HTMLElement} element   - The element to trigger the event on.
 * @param {object}      options   - Custom options for the event.
 */
export function simulateKeyboardEvent(eventType, element, options = {}) {
  try {
    const event = new KeyboardEvent(eventType, {
      view: window,
      bubbles: true,
      cancelable: true,
      ...options,
    });
    element.dispatchEvent(event);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Simulates a mousedown and mouseup event on a DOM element.
 *
 * @param {HTMLElement} element - The element to trigger the events on.
 * @param {object}      options - Custom options for the events.
 */
export function simulateClick(element, options = {}) {
  simulateMouseEvent("mousedown", element, options);
  simulateMouseEvent("mouseup", element, options);
}

/**
 * Simulates a touchstart and touchend event on a DOM element.
 *
 * @param {HTMLElement} element - The element to trigger the events on.
 * @param {object}      options - Custom options for the events.
 */
export function simulateTap(element, options = {}) {
  simulateTouchEvent("touchstart", element, options);
  simulateTouchEvent("touchend", element, options);
}

/**
 * Simulates a keydown and keyup event on a DOM element.
 *
 * @param {string}      key     - The key to press.
 * @param {HTMLElement} element - The element to trigger the events on.
 * @param {object}      options - Custom options for the events.
 */
export function simulateKeypress(key, element, options = {}) {
  const eventOptions = {
    key,
    ...options,
  };

  simulateKeyboardEvent("keydown", element, eventOptions);
  simulateKeyboardEvent("keyup", element, eventOptions);
}

/**
 * Checks if a toggle is open.
 *
 * @param {Bootstrap4DisclosureMenuToggle|Bootstrap4MenubarToggle|Bootstrap4TreeviewToggle} toggle - The toggle to check.
 */
export function toggleIsOpen(toggle) {
  const { parentMenu, controlledMenu } = toggle.elements;

  // Toggle expectations.
  expect(toggle.isOpen).toBeTrue();
  expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("true");

  // Container expectations.
  expect(toggle.dom.container.classList.contains("show")).toBeTrue();
  expect(toggle.dom.container.classList.contains("collapse")).toBeTrue();

  // Parent menu expectations.
  if (parentMenu) {
    expect(parentMenu.focusState).toBe("child");
  }

  // Controlled menu expectations.
  expect(controlledMenu.focusState).toBe("self");
}

/**
 * Checks if a toggle is previewed.
 *
 * @param {Bootstrap4DisclosureMenuToggle|Bootstrap4MenubarToggle|Bootstrap4TreeviewToggle} toggle - The toggle to check.
 */
export function toggleIsPreviewed(toggle) {
  const { parentMenu, controlledMenu } = toggle.elements;

  // Toggle expectations.
  expect(toggle.isOpen).toBeTrue();
  expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("true");

  // Container expectations.
  expect(toggle.dom.container.classList.contains("show")).toBeTrue();
  expect(toggle.dom.container.classList.contains("collapse")).toBeTrue();

  // Parent menu expectations.
  if (parentMenu) {
    expect(parentMenu.focusState).toBe("self");
  }

  // Controlled menu expectations.
  expect(controlledMenu.focusState).toBe("none");
}

/**
 * Checks if a toggle is closed.
 *
 * @param {Bootstrap4DisclosureMenuToggle|Bootstrap4MenubarToggle|Bootstrap4TreeviewToggle} toggle - The toggle to check.
 */
export function toggleIsClosed(toggle) {
  const { parentMenu, controlledMenu } = toggle.elements;

  // Toggle expectations.
  expect(toggle.isOpen).toBeFalse();
  expect(toggle.dom.toggle.getAttribute("aria-expanded")).toBe("false");

  // Container expectations.
  expect(toggle.dom.container.classList.contains("show")).toBeFalse();
  expect(toggle.dom.container.classList.contains("collapse")).toBeTrue();

  // Parent menu expectations.
  if (parentMenu) {
    expect(parentMenu.focusState).toBe("self");
  }

  // Controlled menu expectations.
  expect(controlledMenu.focusState).toBe("none");
}
