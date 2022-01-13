#include <iostream>
using namespace std;

int main()
{
   int n, i;
   bool isPrime = true;

   cout << "Enter a number: ";
   cin >> n;
   // to check non-prime/composite numbers
   for (i = 2; i < n / 2; ++i)
   { 
      cout<<"loop ";
      if (!(n % i))
      {
         isPrime = false;
         break;
      }
         
   }
   if (isPrime)
      cout << "This is a prime number";
   else
      cout << "This is a composite number";

   return 0;
}