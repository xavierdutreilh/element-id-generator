'use strict';

let counter = 0;

module.exports = {
  'generate': () => (++counter).toString(36),
};
