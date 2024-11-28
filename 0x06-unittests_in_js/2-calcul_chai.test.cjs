const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of the rounded values of 1 and 3', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4); // 1 + 3 = 4
    })

    it('should return the sum of the rounded values of 0 and 3.4', function() {
      expect(calculateNumber('SUM', 0, 3.4)).to.equal(3); // 0 + 3 = 3
    })

    it('should return the sum of the rounded values of -3.6 and 0', function() {
      expect(calculateNumber('SUM', -3.6, 0)).to.equal(-4); // -4 + 0 = -4
    });

    it('should return the sum of the rounded values of 1 and 3.7', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5); // 1 + 4 = 5
    });
  
    it('should return the sum of the rounded values of 1.7 and 3', function() {
      expect(calculateNumber('SUM', 1.7, 3)).to.equal(5); // 2 + 3 = 5
    });

    it('should return the sum of the rounded values of 1.2 and 3.7', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5); // 1 + 4 = 5
    });

    it('should return the sum of the rounded values of 1.5 and 3.7', function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6); // 2 + 4 = 6
    });

    it('should return the sum of the rounded values of 1.5 and 3.7', function() {
      expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5); // 1 + 4 = 5
    });

    it('should handle negative numbers', function() {
      expect(calculateNumber('SUM', -1.4, -2.3)).to.equal(-3); // -1 + -2 = -3
    });
  });
  
	describe('SUBTRACT', function() {
    it('should correctly subtract when both numbers are positive', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4); // 1 - 5 = -4
    });

    it('should correctly subtract when both numbers are negative', function() {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3); //-1 + -4 = -5
    });
  });

  describe('DIVIDE', function() {
    it('should correctly divide two positive numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2); //1 / 5 = 0.2
    });

    it('should correctly divide when the numbers are negative', function() {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25); // -1 / -4 = 0.25
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error'); // 1 / 0
    });
  });
});
