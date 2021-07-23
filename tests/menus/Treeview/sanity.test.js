/**
 * Test the Bootstrap4Treeview class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap4Treeview } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap4Treeview);
twoLevelSanity(Bootstrap4Treeview);
