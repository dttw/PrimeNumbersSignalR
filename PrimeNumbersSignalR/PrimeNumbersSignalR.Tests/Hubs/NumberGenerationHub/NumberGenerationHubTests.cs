using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using PrimeNumbersSignalR.NumberGenerators.Primes;
using PrimeNumbersSignalR.NumberGenerators.Primes.Sieves;
using PrimeNumbersSignalR.Tests.NumberGenerators.Primes;
using System;
using System.Collections.Generic;
using System.Dynamic;

namespace PrimeNumbersSignalR.Hubs.Tests
{
    [TestClass()]
    public class NumberGenerationHubTests
    {
        private Mock<INumberGenerationClientContract> numberGenerationContract = new Mock<INumberGenerationClientContract>();

        // Should create a mock version of prime generator.
        private IPrimeGenerator primeGenerator = new MockPrimeGenerator();

        private void TestGenerateAmountOfPrimes(int amountOfPrimes, Mock<INumberGenerationClientContract> numberGenerationContract)
        {
            NumberGenerationHub numberGenerationHub = new NumberGenerationHub(primeGenerator);
            Mock<IHubCallerConnectionContext<dynamic>> mockClients = new Mock<IHubCallerConnectionContext<dynamic>>();

            numberGenerationHub.Clients = mockClients.Object;

            mockClients.Setup(m => m.All).Returns(numberGenerationContract.Object);
            numberGenerationHub.GenerateAmountOfPrimes(amountOfPrimes);
            numberGenerationContract.VerifyAll();
        }

        [TestMethod()]
        public void MaxPrimeLimitTest()
        {
            //  Test method with 1
            numberGenerationContract.Setup(contract => contract.maxPrimeLimit(It.IsAny<int>())).Verifiable();

            NumberGenerationHub numberGenerationHub = new NumberGenerationHub(primeGenerator);
            Mock<IHubCallerConnectionContext<dynamic>> mockClients = new Mock<IHubCallerConnectionContext<dynamic>>();

            numberGenerationHub.Clients = mockClients.Object;

            mockClients.Setup(m => m.All).Returns(numberGenerationContract.Object);
            numberGenerationHub.MaxPrimeLimit();
            numberGenerationContract.VerifyAll();
        }

        [TestMethod()]
        public void GeneratePrimesTestWithOutOfRangeNegative()
        {
            // Test method with -1
            numberGenerationContract.Setup(contract => contract.primesRequestedOutOfRange(It.Is<string>(outOfRangeMessage => outOfRangeMessage == string.Format("You must enter a number between 1 and {0}", primeGenerator.MaxPrimeLimit)))).Verifiable();

            TestGenerateAmountOfPrimes(-1, numberGenerationContract);
        }

        [TestMethod()]
        public void GeneratePrimesTestWithOutOfRangeZero()
        {
            // Test method with 0
            numberGenerationContract.Setup(contract => contract.primesRequestedOutOfRange(It.Is<string>(outOfRangeMessage => outOfRangeMessage == string.Format("You must enter a number between 1 and {0}", primeGenerator.MaxPrimeLimit)))).Verifiable();

            TestGenerateAmountOfPrimes(0, numberGenerationContract);
        }

        [TestMethod()]
        public void GeneratePrimesTestOutOfRangeGreaterThanMax()
        {
            // Test method with 0
            numberGenerationContract.Setup(contract => contract.primesRequestedOutOfRange(It.Is<string>(outOfRangeMessage => outOfRangeMessage == string.Format("You must enter a number between 1 and {0}", primeGenerator.MaxPrimeLimit)))).Verifiable();

            TestGenerateAmountOfPrimes(primeGenerator.MaxPrimeLimit + 1, numberGenerationContract);
        }

        [TestMethod()]
        public void GeneratePrimesTestLowRangeInteger()
        {
            //  Test method with 1
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<List<long>>())).Verifiable();

            TestGenerateAmountOfPrimes(1, numberGenerationContract);
        }

        [TestMethod()]
        public void GeneratePrimesTestMidRangeInteger()
        {
            // Test method with 1073741823
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<List<long>>())).Verifiable();

            TestGenerateAmountOfPrimes(primeGenerator.MaxPrimeLimit / 2, numberGenerationContract);
        }

        [TestMethod()]
        public void GeneratePrimesTestMaxRangeInteger()
        {
            // Test with maximum integer (2147483647)
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<List<long>>())).Verifiable();

            TestGenerateAmountOfPrimes(primeGenerator.MaxPrimeLimit, numberGenerationContract);
        }
    }
}