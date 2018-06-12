using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.NumberGenerators.Primes
{
    public interface IPrimeGenerator
    {
        IList<int> FindPrimesUpTo(int primeLimit);

        IList<int> FindAmountOfPrimes(int amountOfPrimes);
    }
}