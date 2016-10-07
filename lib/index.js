'use strict';

let counter = 0;

module.exports = {
  'generate': () => {
    counter++;

    return (counter).toString(36);
  },
};
