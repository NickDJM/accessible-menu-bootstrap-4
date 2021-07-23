/**
 * Test the Bootstrap4Treeview class to make sure it can initialize under various scenarios.
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Treeview } from "../../../index";
import {
  defaultInitialization,
  controlledMenu,
  customizedMenu,
} from "../_common/initialize";

defaultInitialization(Bootstrap4Treeview);
controlledMenu(Bootstrap4Treeview);
customizedMenu(Bootstrap4Treeview);
