// console.log("Bubble Sort");
// To achieve sorting in Bubble Sort, the adjacent elements in the array are
//  compared and the positions are swapped if the first element is greater than the second. 
//  In this fashion, the largest value "bubbles" to the top.

// let arr = [5,6,3,1,2,4];  
  
// function bubbleSort(arr){  
//     for(let i=0;i<arr.length;i++){  
//         for(let j=0;j<arr.length-i-1;j++){  
//             if(arr[j]>arr[j+1]){  
//                 var temp= arr[j];  
//                 arr[j]=arr[j+1];  
//                 arr[j+1]=temp;  
//             }  
//         }  
//     }  
//     console.log("Sorted Array: ");  
//     console.log(arr);  
// }  

// bubbleSort(arr);  


var arr = [5,6,3,1,2,4];  
  
  
function bubbleSortOptimised(arr){  
    for(var i=0;i<arr.length;i++){  
    var flag=false;  
        for(var j=0;j<arr.length-i-1;j++){  
            if(arr[j]>arr[j+1]){  
                var temp= arr[j];  
                arr[j]=arr[j+1];  
                arr[j+1]=temp;  
                flag=true;  
            }  
        }  
        if(flag==false)  
        break;  
    }  
    console.log("Sorted Array: ");  
    console.log(arr);  
}  
bubbleSortOptimised(arr);  