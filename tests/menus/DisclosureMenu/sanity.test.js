/**
 * Test the Bootstrap4DisclosureMenu class to make sure it "just works".
 *
 * @jest-environment jsdom
 */

import { Bootstrap4DisclosureMenu } from "../../../index";
import { singleLevelSanity, twoLevelSanity } from "../_common/sanity";

singleLevelSanity(Bootstrap4DisclosureMenu);
twoLevelSanity(Bootstrap4DisclosureMenu);
