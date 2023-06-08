////Given an array, find a product of all array elements.
function calculateProduct(arr) {
    let product = 1;
    
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    
    return product;
  }
  