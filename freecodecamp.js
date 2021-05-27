//
// You are given two arrays and an index.
//
//     Copy each element of the first array into the second array, in order.
//
//     Begin inserting elements at index n of the second array.
//
//     Return the resulting array. The input arrays should remain the same after the function runs.
//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].


function frankenSplice(arr1, arr2, n) {
    let newArr;
    newArr = arr1.slice();
    for (let i = newArr.length-1; i >= 0; i--) {
        console.log(newArr[i])
        arr2.splice(n, 0, newArr[i]);

    }
    return arr2;
}


//console.log(frankenSplice([1, 2, 3], [4, 5], 1));


// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
//
//     For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//     arr.push(num)
//     console.log(arr)
//     arr.sort(function(a, b){return a - b})
//     console.log(arr)
//
//     return arr.indexOf(num);
//
// }

 //console.log(getIndexToIns([2, 5, 10], 15));

