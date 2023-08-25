/**
Encode Unicode characters in a string to Unicode escapes.

@param string - The string to be encoded.
@return The encoded string.

@example
```
import {encodeUnicodeEscapes} from 'unicode-escapes';

console.log(encodeUnicodeEscapes('Hello, โลก'));
//=> 'Hello, \u{e42}\u{e25}\u{e01}'
```
*/
export function encodeUnicodeEscapes(string: string): string;

/**
Decode Unicode escapes in a string to Unicode characters.

@param string - The string to be decoded.
@return The decoded string.

@example
```
import {decodeUnicodeEscapes} from 'unicode-escapes';

console.log(decodeUnicodeEscapes('Hello, \\u{e42}\\u{e25}\\u{e01}'));
//=> 'Hello, โลก'
```
*/
export function decodeUnicodeEscapes(string: string): string;
