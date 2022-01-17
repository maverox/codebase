#include <iostream>

using namespace std;

int main()
{   int l; //upper limit of the number for the pattern 
    for (int i = 0; i < l; i++) {
        for (int j = 0; j < l; j++) {
            int n = i + j + 1;
            if (n <= 9) cout<<n; 
            else cout<< " ";
        }
        for (int j = 8; j >= 0; j--) {
            int n  = i + j + 1;
            if (n <= 9) cout<<n;
            else cout << " ";
        }
        cout<< '\n';
    }
    for (int i = l-1; i >= 0; i--) {
        for (int j = 0; j < l; j++) {
            int n = i + j + 1;
            if (n <= 9) cout<<n; 
            else cout<< " ";
        }
        for (int j = l-1; j >= 0; j--) {
            int n  = i + j + 1;
            if (n <= 9) cout<<n;
            else cout << " ";
        }
        cout<< '\n';
    }
    
}
