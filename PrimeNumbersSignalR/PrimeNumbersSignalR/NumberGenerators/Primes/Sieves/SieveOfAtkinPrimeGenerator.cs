using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

// Implements the Sive of Atkin prime Sieve
namespace PrimeNumbersSignalR.NumberGenerators.Primes.Sieves
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

7) Square the number and mark all multiples of that square as non prime. 
   Note that the multiples that can be factored by 2, 3, or 5 need not be marked, as these will be ignored in the final enumeration of primes.

8) Repeat steps four through seven. 

 **/

    public class SieveOfAtkinPrimeGenerator : IPrimeGenerator
    {
        private List<long> primesFound = new List<long>();
        private bool[] primeCandidates = new bool[] { };
        private long limitSquareRoot = 0;
        private long primeLimit = 0;

        public SieveOfAtkinPrimeGenerator()
        {
            // Algorithm step 1
            // Add 2, 3 & 5 to list of primes
            primesFound.Add(2);
            primesFound.Add(3);
            primesFound.Add(5);
        }

        public IList<long> FindAmountOfPrimes(int amountOfPrimes)
        {
            if (amountOfPrimes <= 0 || amountOfPrimes > 100000000)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and {0}", "100000000");
            }

            // TODO: Approximate the limit based on the amount of primes requested
            // TODO: Check that the limit isn't out of range.
            StartPrimeSieve(PrimeSieves.ApproximatePrimeLimit(amountOfPrimes));

            return primesFound.Take(amountOfPrimes).ToList();
        }

        public IList<long> FindPrimesUpTo(int primeLimit)
        {
            if (primeLimit <= 0 || primeLimit > 100000000)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and {0}", "100000000");
            }

            StartPrimeSieve(primeLimit);

            return primesFound;
        }

        private void StartPrimeSieve(long primeLimit)
        {
            this.primeLimit = primeLimit;

            // Alogorithm step 2
            // Create sieve containing all possible prime candidates up to the limit.
            primeCandidates = new bool[primeLimit + 1];

            // Square the limit for use during sieving.
            limitSquareRoot = (long)Math.Sqrt(primeLimit);


        }
    }
}