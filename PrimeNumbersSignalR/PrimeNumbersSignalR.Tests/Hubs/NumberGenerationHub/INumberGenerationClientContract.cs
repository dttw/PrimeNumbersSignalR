using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrimeNumbersSignalR.Hubs.Tests
{
    public interface INumberGenerationClientContract
    {
        void generatedNumbers(IList<long> generatedNumbers);

        void generatedNumbers(Exception generationException);
    }
}