//Given a positive integer, N. Find the factorial of N. 

function factorial(N) {
    let result = 1;
    
    for (let i = 2; i <= N; i++) {
      result *= i;
    }
    
    return result;
  }
  