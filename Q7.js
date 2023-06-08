//Given a string S, the task is to write a program to print all permutations of a given string.

function generatePermutations(S) {
    const result = [];
    backtrack(S.split(''), 0, S.length - 1, result);
    return result;
  }
  
  function backtrack(arr, start, end, result) {
    if (start === end) {
      result.push(arr.join(''));
    } else {
      for (let i = start; i <= end; i++) {
        swap(arr, start, i);
        backtrack(arr, start + 1, end, result);
        swap(arr, start, i); // backtrack by swapping back
      }
    }
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  