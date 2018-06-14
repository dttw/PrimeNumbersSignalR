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

        public NumberGenerationHub(IPrimeGenerator repository)
        {
            primeGenerator = repository;
        }

        public void GenerateAmountOfPrimes(int amountOfPrimes)
        {
            if (amountOfPrimes <= 0 || amountOfPrimes > primeGenerator.MaxPrimeLimit)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and {0}", primeGenerator.MaxPrimeLimit.ToString());
            }

            Clients.All.generatedNumbers(new List<long>());
        }
    }
}