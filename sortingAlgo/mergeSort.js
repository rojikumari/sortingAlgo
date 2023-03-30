// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays.
// helper function to sort two sorted array

function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }
  merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]

//   Our merge algorithm runs at O(n + m) where n and m are the lengths of the first and second arrays respectively. This is because we iterate over each item in each array once.

// Next we can write a mergeSort function that uses recursion to halve the arrays with the slice() method. The base case is when the arrays have a length of 1 or 0.


function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  const sortedArray = mergeSort([3, 5, 8, 5, 99, 1])

  console.log("Sorted Array: ", sortedArray)