// Helper 1 :  takes a number and a place;

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10 //Using Maths.abs() allows us to work with negative numbers.

}
console.log(getDigit(43263, 0)) // 3

// Helper2 : function that counts how many digits are in each number;
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
console.log(digitCount(0)) // 1

// Helper 3 : Our final helper function will take an array of numbers, loop over them and keep track of the digit count of the largest number:

function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }
  console.log(mostDigits([44, 849, 1, 3333])) // 4 (because 3333 has four digits)


  function radixSort(arrOfNums) {
    let maxDigitCount = mostDigits(arrOfNums)
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
      for (let i = 0; i < arrOfNums.length; i++) {
        let digit = getDigit(arrOfNums[i], k)
        digitBuckets[digit].push(arrOfNums[i])
      }
      // New order after each loop
      arrOfNums = [].concat(...digitBuckets)
    }
    return arrOfNums
  }
  console.log(radixSort([1, 33, 444, 0, 3, 2]))




//   What does Radix mean? The Radix of a number is simply the base of a number.

// For example, in life, we usually deal with base 10 numbers: 0-9; each number can be one of ten possible unique digits. So these numbers have a radix of 10.

// If you were working with binary numbers, then each number can only be one of two digits: 0 or 1. These numbers have a radix of 2.


// We will now go over the logic and steps of Radix Sort.

// Every number is composed of digits. For example, 108 is composed of three digits: 1, 0, and 8.

// Every digit in a number can be one of ten numbers: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. These are called “base 10” numbers.