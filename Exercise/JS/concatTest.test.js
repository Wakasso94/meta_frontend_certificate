//const {default: TestRunner } = require("jest-runner");
const concatStrings = require('./concatTest');

test('returns the concatation of the string', () => {
    expect(concatStrings("abc", "def")).toBe("abcdef");
})


