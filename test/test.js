const assert = require('assert')
const { isEven } = require('../functions/helpers')

describe('Number', function() {
    describe('isEven', function() {
        it('should return true when the number is even and odd otherwise', function() {
            assert.equal(isEven(0), true);
            assert.equal(isEven(1), false);
            assert.equal(isEven(2), true);
            assert.equal(isEven(-1), false);
            assert.equal(isEven(-2), true);
        })
    })
})
