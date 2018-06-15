using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.NumberGenerators.Primes
{
    public interface IPrimeGenerator
    {
        int MaxPrimeLimit { get; }

        IList<long> FindAmountOfPrimes(int amountOfPrimes);
    }
}