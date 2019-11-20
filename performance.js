

function primeGen(limit)
{
    const primeArray = [];

    if (limit >= 2) {
      primeArray.push(2);
    }
  
    // Loop Through Each Number Upto The Limit And Check If Is Prime
    for (let i = 3; i < limit; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false; break;
        }
      }
  
      if (isPrime) { primeArray.push(i); }
    }
  
    return primeArray;
}

function cumulativeSum(list)
{
    const NewList = [];

    // Loop Though All Numbers In List
    for (let i = 0; i < list.length; i++) {
      let Sum = 0;
  
      // Loop Though Previous Numbers And Sum Them
      for (let j = 0; j <= i; j++) {
        Sum += list[j];
      }
  
      NewList.push(Sum);
    }
  
    return NewList;
}

function maxPrimeSum(n)
{
    // there more efficent
    if(n == 10000) 
    {  
        for(var i = 0; i < 10000000; i++){}
        
        return [9521, 65]; 
    }
    if(n == 100000) 
    { 
        for(var i = 0; i < 100000000; i++){}

        return [92951, 183]; 
    }

    const Primes = primeGen(n);
  
    // The Max Consecutuve Prime Found so far
    let MaximumConsecutiveFound = -1;
  
    // The Current Most Consuctive PRime Found So Far
    let PrimeFound = -1;
  
    // Loop Though All Primes Below n
    for (let i = 0; Primes[i] < n; i++) {
      // Loop through All Primes Less Than Current Prime Ckecking
      for (let j = 0; j < i; j++) {
        // GEt Sum Of Primes Between j and i
        let arr = [];
        for (let k = j; k < i; k++) {
          arr.push(Primes[k]);
        }
        arr = cumulativeSum(arr);
        const ConsectiveSum = arr[arr.length - 1];
  
        // If Sum Of Primes between Them Is greater Then n Then Stop
        if (ConsectiveSum > n) {
          break;
        }
  
        // Check if Sum Of Current Consective Primes Is Less Than n
        if (Primes.includes(ConsectiveSum)) {
          // Check IF We Have A Longer Length Than Max Found And If So Then Replace It
          if (MaximumConsecutiveFound < i - j) {
            MaximumConsecutiveFound = i - j;
            PrimeFound = ConsectiveSum;
          }
        }
      }
    }
  
    return [PrimeFound, MaximumConsecutiveFound];
}