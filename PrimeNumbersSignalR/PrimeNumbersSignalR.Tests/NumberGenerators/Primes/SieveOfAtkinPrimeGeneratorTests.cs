using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace PrimeNumbersSignalR.NumberGenerators.Primes.Sieves.Tests
{
    [TestClass()]
    public class SieveOfAtkinPrimeGeneratorTests
    {
        // Test method with -1 should throw ArgumentOutOfRangeException
        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void FindAmountOfPrimesTestWithOutOfRangeNegative()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            primeGenerator.FindAmountOfPrimes(-1);
        }

        // Test method with 0 should throw ArgumentOutOfRangeException
        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void FindAmountOfPrimesWithOutOfRangeZero()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            primeGenerator.FindAmountOfPrimes(0);
        }

        // Test method with 100000001 should throw ArgumentOutOfRangeException
        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void FindAmountOfPrimesTestOutOfRangeGreaterThanMax()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            primeGenerator.FindAmountOfPrimes(primeGenerator.MaxPrimeLimit + 1);
        }

        // Test method with 1 should return an list of longs with 1 entry
        [TestMethod()]
        public void FindAmountOfPrimesTestWithLowRangeInteger()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            IList<long> primesGenerated = primeGenerator.FindAmountOfPrimes(1);

            Assert.AreEqual(1, primesGenerated.Count);
        }

        // Test method with 50000000 should return an list of longs with 50000000 entries
        [TestMethod()]
        public void FindAmountOfPrimesTestWithMidRangeInteger()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            IList<long> primesGenerated = primeGenerator.FindAmountOfPrimes(primeGenerator.MaxPrimeLimit / 2);

            Assert.AreEqual(primeGenerator.MaxPrimeLimit / 2, primesGenerated.Count);
        }

        // Test method with 100000000 should return an list of longs with 100000000 entries
        [TestMethod()]
        public void FindAmountOfPrimesTestWithMaxRangeInteger()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            IList<long> primesGenerated = primeGenerator.FindAmountOfPrimes(primeGenerator.MaxPrimeLimit);

            Assert.AreEqual(primeGenerator.MaxPrimeLimit, primesGenerated.Count);
        }

        // Test performance of generating 100000000 primes
        [TestMethod()]
        public void FindAmountOfPrimesTestPerformance()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            Stopwatch stopWatch = new Stopwatch();

            stopWatch.Start();
            primeGenerator.FindAmountOfPrimes(primeGenerator.MaxPrimeLimit);

            TimeSpan generationDuration = stopWatch.Elapsed;

            Assert.Inconclusive(generationDuration.ToString());
        }

        // Test that the amount of Primes returned matches the amount requested.
        [TestMethod()]
        public void FindAmountOfPrimesTestAmountGenerated()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            IList<long> primesGenerated = primeGenerator.FindAmountOfPrimes(100000);

            Assert.AreEqual(100000, primesGenerated.Count);
        }

        // Test that the primes generated match an existing selection of primes in the correct location in the list.
        [TestMethod()]
        public void FindAmountOfPrimesTestAccuracy()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            IList<long> primesGenerated = primeGenerator.FindAmountOfPrimes(10000);

            // 141st prime is 811
            Assert.IsTrue(primesGenerated.Any(prime => prime == 811));
            Assert.AreEqual(140, primesGenerated.IndexOf(811));

            // 1714th prime is 14633
            Assert.IsTrue(primesGenerated.Any(prime => prime == 14633));
            Assert.AreEqual(1713, primesGenerated.IndexOf(14633));

            // 4640th prime is 44741
            Assert.IsTrue(primesGenerated.Any(prime => prime == 44741));
            Assert.AreEqual(4649, primesGenerated.IndexOf(44741));

            // 6766th prime is 67933 
            Assert.IsTrue(primesGenerated.Any(prime => prime == 67933));
            Assert.AreEqual(6765, primesGenerated.IndexOf(67933));

            // 9032nd prime is 93523 
            Assert.IsTrue(primesGenerated.Any(prime => prime == 93523));
            Assert.AreEqual(9031, primesGenerated.IndexOf(93523));

            // 10000th prime is 104729
            Assert.IsTrue(primesGenerated.Any(prime => prime == 104729));
            Assert.AreEqual(9999, primesGenerated.IndexOf(104729));
        }
    }
}