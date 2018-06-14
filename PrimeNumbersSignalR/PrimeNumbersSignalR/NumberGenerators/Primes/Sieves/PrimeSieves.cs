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
            double amoutnDouble = (double)amountOfPrimes;
            double approximatePrimeLimit = 0;

            if (amountOfPrimes >= 7022)
            {
                approximatePrimeLimit = amoutnDouble * Math.Log(amoutnDouble) + amoutnDouble * (Math.Log(Math.Log(amoutnDouble)) - 0.9385);
            }
            else if (amountOfPrimes >= 6)
            {
                approximatePrimeLimit = amoutnDouble * Math.Log(amoutnDouble) + amoutnDouble * Math.Log(Math.Log(amoutnDouble));
            }
            else if (amountOfPrimes > 0)
            {
                approximatePrimeLimit = new int[] { 2, 3, 5, 7, 11 }[amountOfPrimes - 1];
            }

            return (long)approximatePrimeLimit;
        }
    }
}