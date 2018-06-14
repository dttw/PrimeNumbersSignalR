using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using PrimeNumbersSignalR.NumberGenerators.Primes;

namespace PrimeNumbersSignalR.Hubs
{
    public class NumberGenerationHub : Hub
    {
        internal IPrimeGenerator primeGenerator;

        public NumberGenerationHub(IPrimeGenerator primeGenerator)
        {
            this.primeGenerator = primeGenerator;
        }

        public void MaxPrimeLimit()
        {
            Clients.All.maxPrimeLimit(primeGenerator.MaxPrimeLimit);
        }

        public void GenerateAmountOfPrimes(int amountOfPrimes)
        {
            if (!(amountOfPrimes <= 0) && !(amountOfPrimes > primeGenerator.MaxPrimeLimit))
            {
                IList<long> foundPrimes = primeGenerator.FindAmountOfPrimes(amountOfPrimes);

                Clients.All.generatedNumbers(foundPrimes);
            }

            Clients.All.primesRequestedOutOfRange(string.Format("You must enter a number between 1 and {0}", primeGenerator.MaxPrimeLimit.ToString()));
        }
    }
}