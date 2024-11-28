const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should return the sum of the rounded values of 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4); // 1 + 3 = 4
  })

  it('should return the sum of the rounded values of 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5); // 1 + 4 = 5
  });
  
  it('should return the sum of the rounded values of 1.7 and 3', function() {
    assert.strictEqual(calculateNumber(1.7, 3), 5); // 2 + 3 = 5
  });

  it('should return the sum of the rounded values of 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // 1 + 4 = 5
  });

  it('should return the sum of the rounded values of 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // 2 + 4 = 6
  });

  it('should return the sum of the rounded values of 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.4, 3.5), 5); // 1 + 4 = 5
  });

  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.3), -3); // -1 + -2 = -3
  });
});
