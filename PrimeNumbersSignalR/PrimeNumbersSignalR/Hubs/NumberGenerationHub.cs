using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace PrimeNumbersSignalR.Hubs
{
    public class NumberGenerationHub : Hub
    {
        public void GenerateAmountOfPrimes(int amountOfPrimes)
        {
            if (amountOfPrimes <= 0)
            {
                throw new ArgumentOutOfRangeException("You must enter a value between 1 and " + int.MaxValue);
            }

            Clients.All.generatedNumbers(new List<int>());
        }
    }
}