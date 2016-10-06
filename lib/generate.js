'use strict';

let counter = 0;

function generate() {
  counter++;

  return (counter).toString(36);
}

module.exports = generate;
