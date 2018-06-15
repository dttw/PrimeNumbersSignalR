using PrimeNumbersSignalR.NumberGenerators.Primes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.Tests.NumberGenerators.Primes
{
    public class MockPrimeGenerator : IPrimeGenerator
    {
        private int maxPrimeLimit = 10;
        private IList<long> primesFound = new List<long>();
        public int MaxPrimeLimit => throw new NotImplementedException();

        public IList<long> FindAmountOfPrimes(int amountOfPrimes)
        {
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
