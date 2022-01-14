#include <iostream>

using namespace std;

int main()
{   
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
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
    for (int i = 8; i >= 0; i--) {
        for (int j = 0; j < 9; j++) {
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
    
}
