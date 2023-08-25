# unicode-escapes

> Encode and decode [Unicode escapes](https://mathiasbynens.be/notes/javascript-escapes#unicode-code-point) in a string

Can be useful when a tool or service returns text with encoded Unicode characters.

## Install

```sh
npm install unicode-escapes
```

## Usage

```js
import {encodeUnicodeEscapes, decodeUnicodeEscapes} from 'unicode-escapes';

console.log(encodeUnicodeEscapes('Hello, โลก'));
//=> 'Hello, \u{e42}\u{e25}\u{e01}'

console.log(decodeUnicodeEscapes('Hello, \\u{e42}\\u{e25}\\u{e01}'));
//=> 'Hello, โลก'
```

## API

### encodeUnicodeEscapes(string)

Encode Unicode characters in a string to Unicode escapes.

### decodeUnicodeEscapes(string)

Decode Unicode escapes in a string to Unicode characters.

## Use-cases

- **Debugging and logging:** Encoding and decoding Unicode escapes can be valuable in debugging scenarios, where you might need to inspect strings with non-visible or special characters. It can assist in displaying logs, traces, or debug outputs that are human-readable.
- **Data serialization and deserialization:** Ensuring consistent representation of Unicode characters when saving and reading data, particularly in formats that may have special handling for certain escape sequences.
- **Source code analysis and manipulation:** For tooling that analyzes or manipulates source code, such as linters or code transformation tools, where representing characters in escape sequences might be necessary.
- **Interoperability with legacy systems:** When interacting with systems that expect a particular escape syntax for Unicode characters.
