using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrimeNumbersSignalR.NumberGenerators.Primes;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.NumberGenerators.Primes.Tests
{
    [TestClass()]
    public class SieveOfAtkinPrimeGeneratorTests
    {
        // Test method with -1 should throw ArgumentOutOfRangeException
        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void FindAmountOfPrimesTestWithNegativeInteger()
        {

            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            primeGenerator.FindAmountOfPrimes(-1);
        }

        // Test method with 0 should throw ArgumentOutOfRangeException
        [TestMethod()]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void FindAmountOfPrimesTestWithZero()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            primeGenerator.FindAmountOfPrimes(0);
        }

        [TestMethod()]
        public void FindAmountOfPrimesTestWithLowRangeInteger()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            IList<int> primesGenerated = primeGenerator.FindAmountOfPrimes(1);

            Assert.Equals(primesGenerated.Count, 1);
        }

        [TestMethod()]
        public void FindAmountOfPrimesTestWithMidRangeInteger()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            IList<int> primesGenerated = primeGenerator.FindAmountOfPrimes(1073741823);

            Assert.Equals(primesGenerated.Count, 1073741823);
        }

        [TestMethod()]
        public void FindAmountOfPrimesTestWithMaxRangeInteger()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();
            IList<int> primesGenerated = primeGenerator.FindAmountOfPrimes(int.MaxValue);

            Assert.Equals(primesGenerated.Count, int.MaxValue);
        }

        // Test performance of generating 2000000 primes
        [TestMethod()]
        public void FindAmountOfPrimesTestPerformance()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            Stopwatch stopWatch = new Stopwatch();

            stopWatch.Start();
            primeGenerator.FindAmountOfPrimes(2000000);

            TimeSpan generationDuration = stopWatch.Elapsed;

            Assert.Inconclusive(generationDuration.ToString());
        }

        // Test that the amount of Primes returned matches the amount requested.
        [TestMethod()]
        public void FindAmountOfPrimesTestAmountGenerated()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            IList<int> primesGenerated = primeGenerator.FindAmountOfPrimes(100000);

            Assert.Equals(primesGenerated.Count, 100000);
        }

        // Test that the primes generated match an existing selection of primes in the correct location in the list.
        [TestMethod()]
        public void FindAmountOfPrimesTestAccuracy()
        {
            SieveOfAtkinPrimeGenerator primeGenerator = new SieveOfAtkinPrimeGenerator();

            IList<int> primesGenerated = primeGenerator.FindAmountOfPrimes(10000);

            // 140th prime is 811
            Assert.IsTrue(primesGenerated.Any(prime => prime == 811));
            Assert.Equals(primesGenerated.IndexOf(811), 140);

            // 1713th prime is 14633
            Assert.IsTrue(primesGenerated.Any(prime => prime == 14633));
            Assert.Equals(primesGenerated.IndexOf(14633), 1713);

            // 4649th prime is 44741
            Assert.IsTrue(primesGenerated.Any(prime => prime == 44741));
            Assert.Equals(primesGenerated.IndexOf(44741), 4649);

            // 6765th prime is 67933 
            Assert.IsTrue(primesGenerated.Any(prime => prime == 67933));
            Assert.Equals(primesGenerated.IndexOf(67933), 6765);

            // 9032nd prime is 93523 
            Assert.IsTrue(primesGenerated.Any(prime => prime == 93523));
            Assert.Equals(primesGenerated.IndexOf(93523), 9032);

            // 10000th prime is 104729
            Assert.IsTrue(primesGenerated.Any(prime => prime == 104729));
            Assert.Equals(primesGenerated.IndexOf(104729), 10000);
        }
    }
}