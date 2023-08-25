import {expectType} from 'tsd';
import {encodeUnicodeEscapes, decodeUnicodeEscapes} from './index.js';

expectType<string>(encodeUnicodeEscapes(''));
expectType<string>(decodeUnicodeEscapes(''));
