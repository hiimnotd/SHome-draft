/* eslint-disable @typescript-eslint/no-var-requires */
import {R} from '../value';

const en_US = require('./en/string.json');
const vi_VN = require('./vi/string.json');
export const resources = {
  [R.strings.KEY_LANGUAGE_ENGLISH]: en_US,
  [R.strings.KEY_LANGUAGE_VIETNAM]: vi_VN,
};
