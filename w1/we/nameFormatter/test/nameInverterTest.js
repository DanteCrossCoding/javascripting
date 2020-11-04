const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
 
  it("should return empty string when passed an empty string", function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return a single name when passed a name with extra spaces", function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return last name, first name when given a first and last name", function() {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return last name, first name when given a first and last name", function() {
    const inputName = " first last ";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  }) 
  it("should return empty string when given a single honorific", function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return honorific and first name if given honorific first name", () => {
    const inputName = "Dr. First";
    const expectedOutput = "Dr. First";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return honorific last name, first name when given honorific first name last name", function() {
    const inputName = "Dr. first last ";
    const expectedOutput = "Dr. last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return honorific last name, first name when given honorific first name last name with spaces", function() {
    const inputName = " Dr. first last ";
    const expectedOutput = "Dr. last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
  it("should return error when name is undefined", function() {
    const inputName = undefined;
    const expectedOutput = "Error";
    assert.equal(nameInverter(inputName), expectedOutput);
  })
});
