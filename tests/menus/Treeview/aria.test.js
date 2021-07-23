/**
 * Test the Bootstrap4Treeview class for proper ARIA attributes.
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Treeview } from "../../../index";
import { aria } from "../_common/aria";

aria(Bootstrap4Treeview);
