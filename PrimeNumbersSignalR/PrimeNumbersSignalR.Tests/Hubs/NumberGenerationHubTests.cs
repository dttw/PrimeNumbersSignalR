using PrimeNumbersSignalR.Hubs;
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Microsoft.AspNet.SignalR.Hubs;
using System.Dynamic;

namespace PrimeNumbersSignalR.Hubs.Tests
{
    [TestClass()]
    public class NumberGenerationHubTests
    {
        // TODO: Test method with -1
        // TODO: Test method with 0
        // TODO: Test method with 1
        // TODO: Test method with 1073741823
        // TODO: Test method with 2147483647

        [TestMethod()]
        public void GeneratePrimesTest()
        {
            bool sendCalled = false;
            var hub = new NumberGenerationHub();
            var mockClients = new Mock<IHubCallerConnectionContext<dynamic>>();
            hub.Clients = mockClients.Object;
            dynamic all = new ExpandoObject();

            all.broadcastMessage = new Action<string, string>((name, message) =>
            {
                sendCalled = true;
            });

            mockClients.Setup(m => m.All).Returns((ExpandoObject)all);
            hub.GeneratePrimesUpTo(1);
            Assert.True(sendCalled);

            Assert.Fail();
        }
    }
}