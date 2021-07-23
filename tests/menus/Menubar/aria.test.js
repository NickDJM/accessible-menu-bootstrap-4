/**
 * Test the Bootstrap4Menubar class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Menubar } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap4Menubar);
