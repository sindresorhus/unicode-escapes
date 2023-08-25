import test from 'ava';
import {encodeUnicodeEscapes, decodeUnicodeEscapes} from './index.js';

test('encodeUnicodeEscapes', t => {
	t.is(encodeUnicodeEscapes('你好'), '\\u{4f60}\\u{597d}');
});

test('encodeUnicodeEscapes - ASCII remains unchanged', t => {
	t.is(encodeUnicodeEscapes('Hello World!'), 'Hello World!');
});

test('encodeUnicodeEscapes - mix Unicode and ASCII', t => {
	t.is(encodeUnicodeEscapes('Hello 你好 World!'), 'Hello \\u{4f60}\\u{597d} World!');
});

test('decodeUnicodeEscapes - modern syntax', t => {
	t.is(decodeUnicodeEscapes('\\u{4F60}\\u{597D}'), '你好');
});

test('decodeUnicodeEscapes - old syntax', t => {
	t.is(decodeUnicodeEscapes('\\u4F60\\u597D'), '你好');
});

test('decodeUnicodeEscapes - handles mix of modern and old syntax', t => {
	t.is(decodeUnicodeEscapes('\\u{4F60}\\u597D'), '你好');
});

test('decodeUnicodeEscapes - handles modern syntax with different lengths', t => {
	t.is(decodeUnicodeEscapes('\\u{A}\\u{4F60}\\u{1F600}'), '\u{A}\u{4F60}\u{1F600}');
});

test('decodeUnicodeEscapes - ignores invalid modern syntax with too many characters', t => {
	t.is(decodeUnicodeEscapes('\\u{1234567}'), '\\u{1234567}');
});
