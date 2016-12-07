'use strict';

const fs = require('fs');
const path = require('path');

const expect = require('expect');

const generator = require(path.join(__dirname, '..', 'lib'));

function read(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

describe('element-id-generator', () => {
  describe('generate', () => {
    it('should generate unique element IDs', () => {
      const expected = read(path.join(__dirname, 'expected', 'ids.json'));
      const actual = [];

      for (let i = 1; i <= 36; i++) {
        actual.push(generator.generate());
      }

      expect(actual).toEqual(expected);
    });
  });
});
