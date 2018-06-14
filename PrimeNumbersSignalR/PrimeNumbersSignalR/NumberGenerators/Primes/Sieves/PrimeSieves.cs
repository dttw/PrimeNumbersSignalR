using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PrimeNumbersSignalR.NumberGenerators.Primes.Sieves
{
    public static class PrimeSieves
    {
        public static long ApproximatePrimeLimit(int amountOfPrimes)
        {
            double n = (double)amountOfPrimes;
            double p = 0;

            if (amountOfPrimes >= 7022)
            {
                p = n * Math.Log(n) + n * (Math.Log(Math.Log(n)) - 0.9385);
            }
            else if (amountOfPrimes >= 6)
            {
                p = n * Math.Log(n) + n * Math.Log(Math.Log(n));
            }
            else if (amountOfPrimes > 0)
            {
                p = new int[] { 2, 3, 5, 7, 11 }[amountOfPrimes - 1];
            }

            return (long)p;
        }
    }
}