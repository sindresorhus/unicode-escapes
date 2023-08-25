const isASCII = character => character.codePointAt(0) <= 127;

const validateString = string => {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof string}\`.`);
	}
};

export function encodeUnicodeEscapes(string) {
	validateString(string);

	return [...string]
		.map(character => isASCII(character) ? character : `\\u{${character.codePointAt(0).toString(16)}}`)
		.join('');
}

export function decodeUnicodeEscapes(string) {
	validateString(string);

	return string.replaceAll(/\\u{([\da-f]{1,6})}|\\u([\da-f]{4})/gi, (_, p1, p2) => String.fromCodePoint(Number.parseInt(p1 ?? p2, 16)));
}
