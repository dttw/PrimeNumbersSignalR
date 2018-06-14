﻿using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Dynamic;

namespace PrimeNumbersSignalR.Hubs.Tests
{
    [TestClass()]
    public class NumberGenerationHubTests
    {
        private Mock<INumberGenerationClientContract> numberGenerationContract = new Mock<INumberGenerationClientContract>();

        private void TestGenerateAmountOfPrimes(int amountOfPrimes, Mock<INumberGenerationClientContract> numberGenerationContract)
        {
            NumberGenerationHub numberGenerationHub = new NumberGenerationHub();
            Mock<IHubCallerConnectionContext<dynamic>> mockClients = new Mock<IHubCallerConnectionContext<dynamic>>();

            numberGenerationHub.Clients = mockClients.Object;

            mockClients.Setup(m => m.All).Returns(numberGenerationContract.Object);
            numberGenerationHub.GenerateAmountOfPrimes(amountOfPrimes);
            numberGenerationContract.VerifyAll();
        }

        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void GeneratePrimesTestWithOutOfRangeNegative()
        {
            // Test method with -1
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<ArgumentOutOfRangeException>())).Verifiable();

            TestGenerateAmountOfPrimes(-1, numberGenerationContract);
        }

        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void GeneratePrimesTestWithOutOfRangeZero()
        {
            // Test method with 0
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<ArgumentOutOfRangeException>())).Verifiable();

            TestGenerateAmountOfPrimes(0, numberGenerationContract);
        }

        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void GeneratePrimesTestOutOfRangeGreaterThanMax()
        {
            // Test method with 0
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<ArgumentOutOfRangeException>())).Verifiable();

            TestGenerateAmountOfPrimes(50000001, numberGenerationContract);
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

            TestGenerateAmountOfPrimes(25000000, numberGenerationContract);
        }

        [TestMethod()]
        public void GeneratePrimesTestMaxRangeInteger()
        {
            // Test with maximum integer (2147483647)
            numberGenerationContract.Setup(contract => contract.generatedNumbers(It.IsAny<List<long>>())).Verifiable();

            TestGenerateAmountOfPrimes(50000000, numberGenerationContract);
        }
    }
}