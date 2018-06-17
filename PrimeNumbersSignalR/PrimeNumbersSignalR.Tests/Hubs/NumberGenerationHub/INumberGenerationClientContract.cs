using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.Tests.Hubs
{
    public interface INumberGenerationClientContract
    {
        void generatedNumbers(IList<long> generatedNumbers);

        void primesRequestedOutOfRange(string outOfRangeMessage);

        void maxPrimeLimit(int limit);
    }
}