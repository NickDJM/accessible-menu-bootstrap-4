/**
 * Test the Bootstrap4Menubar class to make sure it can initialize under various scenarios.
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Menubar } from "../../../index";
import {
  defaultInitialization,
  controlledMenu,
  customizedMenu,
} from "../_common/initialize";

defaultInitialization(Bootstrap4Menubar);
controlledMenu(Bootstrap4Menubar);
customizedMenu(Bootstrap4Menubar);
