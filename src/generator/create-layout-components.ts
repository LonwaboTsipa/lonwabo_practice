#!/usr/bin/env node
import { styleConsoleText, FONT_BACKGROUND, FONT_COLORS, FONT_SET } from "../utils/console";
import { generateComponents } from "../utils/layout";

console.log(styleConsoleText('Create layout components start', FONT_COLORS.darkGray));
generateComponents();
console.log(styleConsoleText('Create layout components end', FONT_COLORS.darkGray));