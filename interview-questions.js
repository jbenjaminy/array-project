'use strict'

// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array.
// You shouldn't use the .filter method here; try to write the algorithm from scratch.

let removeSome = ( arr ) => {
  let newArr = [];
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[ i ] > 5 ) {
      newArr.push( arr[ i ] )
    }
  }
  return newArr
}

// console.log( removeSome( [ 5, 1, 20, 2, 10 ] ) )

  /* 
    SOLUTIONS:  

      function remove_lt_5(arr) {
        for (var i = arr.length-1; i >= 0; --i) {
          if (arr[i] < 5) arr.remove(i);
        }
        return arr;
      }

    -OR-

      function remove_lt_5(arr) {
        var ret = [];
        for (var i = 0; i < arr.length; ++i) {
          if (!(arr[i] < 5)) ret.push(arr[i]);
        }
        return ret;
      }

  */

// Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted. For example, if your input arrays were [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10], your output array should be [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11].

let combineSort = ( arr1, arr2 ) => {
  let newArr = arr1.concat( arr2 )
  newArr.sort( ( a, b ) => {
    return a - b
  } )
  return newArr
}

// console.log( combineSort( [ 1, 3, 6, 8, 11 ], [ 2, 3, 5, 8, 9, 10 ] ) )

  /* 
    SOLUTION:  

      function merge_arrays(arr1, arr2) {
        var idx1 = 0, idx2 = 0;
        var ret = [];

        while (idx1 < arr1.length && idx2 < arr2.length) {
          if (arr1[idx1] <= arr2[idx2])
            ret.push(arr1[idx1++]);
          else
            ret.push(arr2[idx2++]);
        }

        // One array is now empty. Join the rest of the other array on.
        if (idx2 < arr2.length) {
          idx1 = idx2;
          arr1 = arr2;
        }

        while (idx1 < arr1.length) ret.push(arr1[idx1++]);
        return ret;
      }
      console.log(merge_arrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

  */
// Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index. For example, if the input was [1, 3, 9, 4], the output should be [108, 36, 12, 27] (i.e. [3*9*4, 1*9*4, 1*3*4, 1*3*9]).
let multiplyOthers = ( arr ) => {
  let resultArr = []
  for ( var num of arr ) {
    let index = arr.indexOf( num )
    let newArr = arr.slice( 0, index ).concat( arr.slice( index + 1, arr.length ) )
    for ( var i = newArr.length - 1; i > 0; i-- ) {
      newArr.splice( i, 0, '*' );
    }
    let result = eval( newArr.join( '' ) )
    resultArr.push( result )
  }
  return resultArr
}
console.log( multiplyOthers( [ 1, 3, 9, 4 ] ) )

  /* 
    SOLUTIONS:  

      // As accurate as possible, but O(N^2)
        function products(arr) {
          var ret = [];
          for (var idx1 = 0; idx1 < arr.length; ++idx1) {
            var prod = 1;
            for (var idx2 = 0; idx2 < arr.length; ++idx2) {
              if (idx1 != idx2) prod *= arr[idx2];
            }
            ret.push(prod);
          }
          return ret;
        }

    -OR-    

      // O(N) but risks inaccuracy due to overflow and precision loss
        function products(arr) {
          var ret = [];
          var prod = 1;
          for (var idx2 = 0; idx2 < arr.length; ++idx2) {
            prod *= arr[idx2];
          }
          for (var idx1 = 0; idx1 < arr.length; ++idx1) {
            ret.push(prod / arr[idx1]);
          }
          return ret;
        }
        console.log(products([1,3,9,4]));
  */
