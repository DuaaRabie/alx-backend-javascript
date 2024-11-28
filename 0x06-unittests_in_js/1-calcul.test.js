const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of the rounded values of 1 and 3', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4); // 1 + 3 = 4
    })

    it('should return the sum of the rounded values of 0 and 3.4', function() {
      assert.strictEqual(calculateNumber('SUM', 0, 3.4), 3); // 0 + 3 = 3
    })

    it('should return the sum of the rounded values of -3.6 and 0', function() {
      assert.strictEqual(calculateNumber('SUM', -3.6, 0), -4); // -4 + 0 = -4
    });

    it('should return the sum of the rounded values of 1 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5); // 1 + 4 = 5
    });
  
    it('should return the sum of the rounded values of 1.7 and 3', function() {
      assert.strictEqual(calculateNumber('SUM', 1.7, 3), 5); // 2 + 3 = 5
    });

    it('should return the sum of the rounded values of 1.2 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5); // 1 + 4 = 5
    });

    it('should return the sum of the rounded values of 1.5 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6); // 2 + 4 = 6
    });

    it('should return the sum of the rounded values of 1.5 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5); // 1 + 4 = 5
    });

    it('should handle negative numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.3), -3); // -1 + -2 = -3
    });
  });

  describe('SUBTRACT', function() {
    it('should correctly subtract when both numbers are positive', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4); // 1 - 5 = -4
    });

    it('should correctly subtract when both numbers are negative', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3); //-1 + -4 = -5
    });
  });

  describe('SUBTRACT', function() {
    it('should correctly divide two positive numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2); //1 / 5 = 0.2
    });

    it('should correctly divide when the numbers are negative', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25); // -1 / -4 = 0.25
    });

    it('should return "Error" when dividing by 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'); // 1 / 0
    });
  });



});
