export const FONT_COLORS = {
	"default": '39',
	"black": '30',
	"red": '31',
	"green": '32',
	"yellow": '33',
	"blue": '34',
	"magenta": '35',
	"cyan": '36',
	"lightGray": '37',
	"darkGray": '90',
	"lightRed": '91',	
	"lightGreen": '92',
	"lightYellow": '93',
	"lightBlue": '94',
	"lightMagenta": '95',
	"lightCyan": '96',
	"white": '97',
};

export const FONT_BACKGROUND = {
	"default": '49',
	"black": '40',
	"red": '41',
	"green": '42',
	"yellow": '43',
	"blue": '44',
	"magenta": '45',
	"cyan": '46',
	"lightGray": '47',
	"darkGray": '100',
	"lightRed": '101',	
	"lightGreen": '102',
	"lightYellow": '103',
	"lightBlue": '104',
	"lightMagenta": '105',
	"lightCyan": '106',
	"white": '107',
};

export const FONT_SET = {
	"bold": '1',	
	"underlined": '4',	
	"reverse": '7',
	"hidden": '8'
};

export function colorText(color, text) {
	return "\u001b[" + color + "m" + text + "\u001b[0m";
}

export function styleConsoleText(text, ...styles) {
	if (!styles) {
		styles = [];
	}
	let response = styles.reduce((acc, style) => { 
		acc += `\u001b[${style}m`;
		return acc;
	}, "");
	response += text;
	response += '\u001b[0m';
	return response;
}