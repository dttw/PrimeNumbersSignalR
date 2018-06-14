using System;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Owin;
using PrimeNumbersSignalR.Hubs;
using PrimeNumbersSignalR.NumberGenerators.Primes.Sieves;

[assembly: OwinStartup(typeof(PrimeNumbersSignalR.App_Start.Startup))]

namespace PrimeNumbersSignalR.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
            GlobalHost.DependencyResolver.Register(typeof(NumberGenerationHub), () => new NumberGenerationHub(new SieveOfAtkinPrimeGenerator()));

            app.MapSignalR();
        }
    }
}