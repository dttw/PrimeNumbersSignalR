using PrimeNumbersSignalR.NumberGenerators.Primes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.NumberGenerators.Primes.Sieves
{
    public class MockPrimeGenerator : IPrimeGenerator
    {
        private IList<long> primesFound = new List<long>();
        public int MaxPrimeLimit { get; } = 10;

        public IList<long> FindAmountOfPrimes(int amountOfPrimes)
        {
            if (amountOfPrimes <= 0 || amountOfPrimes > MaxPrimeLimit)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and {0}", MaxPrimeLimit.ToString());
            }

            MockGeneration(amountOfPrimes);

            return primesFound;
        }

        private void MockGeneration(int amountOfPrimes)
        {
            for (long fakePrime = 0; fakePrime < amountOfPrimes; fakePrime++)
            {
                primesFound.Add(fakePrime);
            }
        }
    }
}
