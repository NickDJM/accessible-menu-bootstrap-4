/**
 * Test the Bootstrap4DisclosureMenu class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap4DisclosureMenu } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap4DisclosureMenu);
