const assert = chai.assert;


describe ('primeGen', function()
{
    it('primeGen(10) = ['+  [2, 3, 5, 7 ] + ']', function()
    {
        let result = primeGen(10);
        const expected = [ 2, 3, 5, 7 ];
        assert.deepEqual(result, expected);
    });

    it('primeGen(20) = ['+  [2, 3, 5, 7, 11, 13, 17, 19] + ']', function()
    {
        let result = primeGen(20);
        const expected = [2, 3, 5, 7, 11, 13, 17, 19];
        assert.deepEqual(result, expected);
    });

});

describe ('cumulativeSum', function()
{
    it('cumulativeSum([1, 2, 3, 4]) = [' + [1, 2, 3, 4] + ']', function()
    {
        let result = cumulativeSum([1, 2, 3, 4]);
        const expected = [1, 3, 6, 10];
        assert.deepEqual(result, expected);
    });

    it('cumulativeSum([10, 11, 12, 13, 14]) = [' + [10, 11, 12, 13, 14] + ']', function()
    {
        let result = cumulativeSum([10, 11, 12, 13, 14]);
        const expected = [10, 21, 33, 46, 60];
        assert.deepEqual(result, expected);
    });

});

describe ('maxPrimeSum', function()
{
    it('maxPrimeSum(100) = [' + [41, 6] + ']', function()
    {
        let result = maxPrimeSum(100);
        const expected = [41, 6];
        assert.deepEqual(result, expected);
    });

    it('maxPrimeSum(100) = [' + [953, 21] + ']', function()
    {
        let result = maxPrimeSum(1000);
        const expected = [953, 21];
        assert.deepEqual(result, expected);
    });

});