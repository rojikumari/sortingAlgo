// Insertion Sort works by comparing an element with the elements to its left, until it reaches an element that is smaller than it; 
// the element is then inserted in front of the smaller element.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentVal
    }
    return arr
  }

  let output = insertionSort([2, 1, 3, 7, 5])
  console.log(output) 