/* eslint-env jasmine */

const fs = require('fs')

const expect = require('expect')

const generator = require('../lib')

function read (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

describe('generator', () => {
  describe('generate', () => {
    it('should generate unique element IDs', () => {
      const expected = read(`${__dirname}/expected/ids.json`)
      const actual = []

      for (let i = 1; i <= 36; i++) {
        actual.push(generator.generate())
      }

      expect(actual).toEqual(expected)
    })
  })
})
