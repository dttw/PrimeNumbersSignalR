# PrimeNumbersSignalR
Simple site which generates and displays prime numbers using SignalR.

# Prerequisites

- Visual Studio version 2017. 
- .NET Framework 4.7.1 targeting pack installed for VS.

# Running the application

- Run the PrimeNumberSignalR project from Visual Studio
- A page will be displayed asking you to enter the number of primes to generate.

# Tests

Run C# tests using the Visual Studio test runner

I ran my tests using Chutzpah to allow for VS integeration. They can be run from the command line using chutzpah.console.exe found in packages\Chutzpah.4.3.7\tools or other utilities that will run jasmine tests.

# Happy with

 - Prime generation performance
 - Unit test coverage in C#

# Would change

- Need to give more feedback to the user during the generation process.

- numberGenerationHub and multiplicationTable turned into prototypes to simplify their usage.

 - Making numbergenerationhub into a prototype would also allow for the client methods to be testable by setting them as existing methods on the prototype rather than creating the methods when the hub proxy is created.

 - Make the call to the server when generating primes async so that the clientside will wait for the promise to be completed before displaying the primes.

 - Add pagination to generated table that would display a 50x50 set of results rather than generating all the factors at once

 - The prime generation uses an array to keep track of numbers as prime. As arrays are indexed with an int 32 this puts a limit on the amount of primes which can be generated. Would like to change this so that a higher number of primes could be generated.
