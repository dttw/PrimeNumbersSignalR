using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace PrimeNumbersSignalR.Hubs
{
    public class NumberGenerationHub : Hub
    {
        public void GeneratePrimesUpTo(int maxPrime)
        {
            Clients.All.hello();
        }

        public void GenerateAmountOfPrimes(int amountOfPrimes)
        {
            Clients.All.hello();
        }
    }
}