// eslint-disable-next-line no-undef
const { assert } = chai;


// eslint-disable-next-line no-undef
describe('primeGen', function () {
  // eslint-disable-next-line no-undef
  it(`primeGen(10) = [${[2, 3, 5, 7]}]`, function () {
    // eslint-disable-next-line no-undef
    const result = primeGen(10);
    const expected = [2, 3, 5, 7];
    assert.deepEqual(result, expected);
  });

  // eslint-disable-next-line no-undef
  it(`primeGen(20) = [${[2, 3, 5, 7, 11, 13, 17, 19]}]`, function () {
    // eslint-disable-next-line no-undef
    const result = primeGen(20);
    const expected = [2, 3, 5, 7, 11, 13, 17, 19];
    assert.deepEqual(result, expected);
  });
});

// eslint-disable-next-line no-undef
describe('cumulativeSum', function () {
  // eslint-disable-next-line no-undef
  it(`cumulativeSum([1, 2, 3, 4]) = [${[1, 2, 3, 4]}]`, function () {
    // eslint-disable-next-line no-undef
    const result = cumulativeSum([1, 2, 3, 4]);
    const expected = [1, 3, 6, 10];
    assert.deepEqual(result, expected);
  });

  // eslint-disable-next-line no-undef
  it(`cumulativeSum([10, 11, 12, 13, 14]) = [${[10, 11, 12, 13, 14]}]`, function () {
    // eslint-disable-next-line no-undef
    const result = cumulativeSum([10, 11, 12, 13, 14]);
    const expected = [10, 21, 33, 46, 60];
    assert.deepEqual(result, expected);
  });
});

// eslint-disable-next-line no-undef
describe('maxPrimeSum', function () {
  // eslint-disable-next-line no-undef
  it(`maxPrimeSum(100) = [${[41, 6]}]`, function () {
    // eslint-disable-next-line no-undef
    const result = maxPrimeSum(100);
    const expected = [41, 6];
    assert.deepEqual(result, expected);
  });

  // eslint-disable-next-line no-undef
  it(`maxPrimeSum(100) = [${[953, 21]}]`, function () {
    // eslint-disable-next-line no-undef
    const result = maxPrimeSum(1000);
    const expected = [953, 21];
    assert.deepEqual(result, expected);
  });
});
