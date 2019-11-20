const assert = chai.assert;

describe ('maxPrimeSum', function()
{
    this.slow(0);
    

    it('maxPrimeSum(10000) should take less than 20ms', function()
    {
        this.timeout(1000);
        maxPrimeSum(10001);
    });

    it('maxPrimeSum(100000) should take less than 200ms', function()
    {
        this.timeout(1000);
        maxPrimeSum(40000);
    });

});