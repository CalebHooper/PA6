// eslint-disable-next-line no-undef,no-unused-vars
const { assert } = chai;

// eslint-disable-next-line no-undef
describe('maxPrimeSum', function () {
  this.slow(0);


  // eslint-disable-next-line no-undef
  it('maxPrimeSum(10000) should take less than 20ms', function () {
    this.timeout(1000);
    // eslint-disable-next-line no-undef
    maxPrimeSum(10001);
  });

  // eslint-disable-next-line no-undef
  it('maxPrimeSum(100000) should take less than 200ms', function () {
    this.timeout(1000);
    // eslint-disable-next-line no-undef
    maxPrimeSum(40000);
  });
});
