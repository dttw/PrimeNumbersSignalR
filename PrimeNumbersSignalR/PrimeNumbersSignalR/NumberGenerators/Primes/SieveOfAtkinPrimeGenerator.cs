using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

// Implements the Sive of Atkin prime Sieve
namespace PrimeNumbersSignalR.NumberGenerators.Primes
{
    /**
The algorithm:

1) Create a results list, filled with 2, 3, and 5.

2) Create a sieve list with an entry for each positive integer; all entries of this list should initially be marked non prime (composite).

3) For each entry number n in the sieve list, with modulo-sixty remainder r :

     3.1) If r is 1, 13, 17, 29, 37, 41, 49, or 53, flip the entry for each possible solution to 4x2 + y2 = n. 
     3.2) If r is 7, 19, 31, or 43, flip the entry for each possible solution to 3x2 + y2 = n. 
     3.3) If r is 11, 23, 47, or 59, flip the entry for each possible solution to 3x2 − y2 = n when x > y. 
     3.4) If r is something else, ignore it completely.

4) Start with the lowest number in the sieve list.

5) Take the next number in the sieve list still marked prime.

6) Include the number in the results list.

7) Square the number and mark all multiples of that square as non prime. Note that the multiples that can be factored by 2, 3, or 5 need not be marked, as these will be ignored in the final enumeration of primes.

8) Repeat steps four through seven. 

 **/

    public class SieveOfAtkinPrimeGenerator : IPrimeGenerator
    {
        private List<int> primes = new List<int>();
        private bool[] isPrime = new bool[] { };

        public IList<int> FindAmountOfPrimes(int amountOfPrimes)
        {
            if (amountOfPrimes <= 0 || amountOfPrimes > int.MaxValue)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and " + int.MaxValue);
            }

            // TODO: Approximate the limit based on the amount of primes requested
            throw new NotImplementedException();
        }

        public IList<int> FindPrimesUpTo(int primeLimit)
        {
            if (primeLimit <= 0 || primeLimit > int.MaxValue)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and " + int.MaxValue);
            }

            throw new NotImplementedException();
        }

        private void SieveForPrimes(uint primeLimit)
        {
            // TODO: Add 2, 3 & 5 to list of primes
            // TODO: Create sieve containing all integers
            // TODO: Check remainders
            // TODO: Include lowest number in results
            // TODO: Square the number previously added to results, mark all multiples as non-prime
        }
    }
}