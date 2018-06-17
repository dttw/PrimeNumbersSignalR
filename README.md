# PrimeNumbersSignalR
Simple site which generates and displays prime numbers using SignalR.

# Prerequisites

Visual Studio with the .NET Framework 4.7.1 targeting pack installed.

# Running the application

Run the PrimeNumberSignalR project from Visual Studio
A page will be displayed asking you to enter the number of primes to generate.

# Tests

Run c# tests using the visual studio test runner

I ran my tests using Chutzpah to allow for VS integeration. They can however be run from the command line using chutzpah.console.exe found in packages\Chutzpah.4.3.7\tools.

# Happy with

Prime generation performance

# Would change

Need to give more feedback to the user during the generation process.

numberGenerationHub and multiplicationTable turned into prototypes to simplify their usage.

Making numbergenerationhub into a prototype would also allow for the client methods to be testable by setting them as existing methods on the prototype rather than creating the methods when the hub proxy is created.

Make the call to the server when generating primes async so that the clientside will wait for the promise to be completed before displaying the primes.

Add pagination to generated table that would display a 50x50 set of results rather than generating all the factors at once

Prime generator uses a long internally to allow for generation of primes outside the int32 max. However the way primes are generated uses an array which are keyed using an int32. This puts a limit on the amount of primes which can be generated. Would like to change this so that multiple arrays are created to allow for generation of higher numbers of primes.
