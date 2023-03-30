// First, we need to implement a “partition” helper function:

// This function will accept three arguments: the array to be sorted, a start index, and an end index (these will default to 0 and array length minus 1 respectively).
// Grab the pivot from the start of the array.
// Store the current pivot index in a variable called swapIndex - this will keep track of where the pivot will end up.
// Loop through the array from start to end. Inside the loop, check if the pivot is greater than the current element. If so, increment swapIndex by one, and then swap the current element with the element at the swap index (providing the swap index doesn’t equal the current element’s index – no point swapping an element into the same place!)
// After looping through, swap the pivot with the element at the swap index.
// Return the swap index.

function partition(arr, start, end) {
    const pivotValue = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== start) {
      // Swap pivot into correct place
      ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
  }

//   Now we can implement Quick Sort using recursion. In this quicksort function, we will:

// Call the partition helper function on the array.
// When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
// The base case occurs when the array is of length 0 or 1.

  function quickSort(arr, start = 0, end = arr.length - 1) {
    // Base case
    if (start >= end) return
    let pivotIndex = partition(arr, start, end)
    // Left
    quickSort(arr, start, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, end)
    return arr
  }

//   First the left side of the array is sorted with recursive calls, then the right side is sorted recursively.

  let sortedArray = quickSort([8,2,6,0,2,1])
  console.log("sortedArray: ", sortedArray)