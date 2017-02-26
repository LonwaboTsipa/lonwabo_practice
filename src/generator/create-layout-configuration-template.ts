#!/usr/bin/env node
import { styleConsoleText, FONT_BACKGROUND, FONT_COLORS, FONT_SET } from "../utils/console";
import { generateConfigurationTemplate } from "../utils/layout";

const layoutConfigurationTypes = require("../../artifacts/config/layout/layoutConfigurationTypes");


console.log(styleConsoleText('Create layout configuration template start', FONT_COLORS.darkGray));
for (let layoutConfigurationType of layoutConfigurationTypes) {
	generateConfigurationTemplate(layoutConfigurationType);
}
console.log(styleConsoleText('Create layout configuration template end', FONT_COLORS.darkGray));