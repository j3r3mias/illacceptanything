/* Problem specs
   * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

 (function(largestPrime) {

   /*
    * checks whether the passed in number is prime
    * fails if the passed in number is a string, I believe
    * an ascii conversion is perfomred
    * ToDo: check the type of the passed in number (use typescript as instructor)
    */
   largestPrime.isPrime = function(number) {

     // negative numbers can not be prime
     if (number < 0) return false;

     // two is the smallest prime number
     if (number === 2) {
       return true;
     }

     // even numbers are not prime
     if (number % 2 == 0) {
       return false;
     }

     var root = Math.ceil(Math.sqrt(number));

     for (var i = root; i > 2; i--){
         if (number % i === 0){
           return false;
         }
     }

     return true;
   };


   largestPrime.largestPrimeFactor = function(number) {

     var root = Math.ceil(Math.sqrt(number));
     console.log(root);
     // todo: remove the var before i and test, then try to
     // understand why it broke
     for (var i = root; i > 2; i--) {
       if (number % i === 0) {
         if (largestPrime.isPrime(i))  return i;
       }
     }

     return 0;
   };

 })(window.largestPrime = window.largestPrime || {});
 
(function (largestPrime) {
  var knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19];
  var inner = [1, 3, 7, 9];
  function isPrime(number) {
    // negative numbers can not be prime
    if (number < 2) return false;
    
    var max = Math.ceil(Math.sqrt(number) / 10) * 10,
        prime, i, j, biggest;
    
    for (prime of knownPrimes) {
      if (prime > max) {
        return true;
      }
      if (number % prime === 0) {
        return number === prime;
      }
    }
  
    biggest = knownPrimes[knownPrimes.length - 1];
    for (i = Math.floor(biggest / 10) * 10; i < max; i += 10) {
      for (j of inner) {
        if (i + j > biggest && isPrime(i + j)) {
          knownPrimes.push(i + j);
          if (number % (i + j) === 0) {
            return number === i + j;
          }
        }
      }
    }
    return true;
  }

  largestPrime.isPrime = isPrime;
  largestPrime.largestPrimeFactor = function (number) {
    if (number < 2) return 0;
    if (isPrime(number)) return number;
    var i = 0, 
        prime = knownPrimes[i];
    while (!isPrime(number)) {
      while (number % prime === 0) {
        number = number / prime;
      }
      i++;
      prime = knownPrimes[i];
    }
    return number;
  };
}) (window.largestPrime = window.largestPrime || {});
  
console.log(window.largestPrime.largestPrimeFactor(600851475143)); //6857
