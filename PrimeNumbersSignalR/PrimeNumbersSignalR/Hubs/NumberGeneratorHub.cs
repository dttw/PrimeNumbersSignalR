using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace PrimeNumbersSignalR.Hubs
{
    public class NumberGeneratorHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}