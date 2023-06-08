//Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

function findMax(arr) {
    // Base case: empty array
    if (arr.length === 0) {
      return undefined;
    }
  
    // Base case: array with only one element
    if (arr.length === 1) {
      return arr[0];
    }
  
    // Recursive case: split the array in two halves
    const mid = Math.floor(arr.length / 2);
    const leftMax = findMax(arr.slice(0, mid));
    const rightMax = findMax(arr.slice(mid));
  
    // Compare and return the maximum
    return Math.max(leftMax, rightMax);
  }
  