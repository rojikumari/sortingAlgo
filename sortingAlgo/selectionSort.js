// Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest 
// (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
// The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element 
// of the unsorted portion. This process is repeated for the remaining unsorted portion of the list until the entire list is sorted. 

let inputArr = [5, 2, 4, 6, 1, 3];

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}

selectionSort(inputArr);
console.log(inputArr);