/**
 * Test the Bootstrap4Menubar class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Menubar } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap4Menubar);
twoLevelSanity(Bootstrap4Menubar);
