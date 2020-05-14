// Problem 1 Write a function to find the largest string in an array of strings making use of the reduce function. You can, of course, do it using a loop, but see how short your code can be if you make use of the filter function.

var myarray = ["hello" , "World" , " this" , "is", "my", "first" ,"sentence"]

function largest_str(myarray){    
    return myarray.reduce(function(prev,curr){if (prev.length > curr.length) {return prev} else {return curr}})
}

// Problem 2 Write a function that takes an array of numbers and returns the sum of squares of those numbers.
// E.g. if the array passed is [1, 2, 3] then the function should return 14. 

function square_sum(arr) {
    return arr.map(function(ele){return ele*ele}).reduce(function(prev,curr){return prev+curr})
}

// Write a function that takes an array of numbers as an argument and filters and returns the even numbers in them.

function evens(arr) {
    return arr.filter(function(ele){return ele%2===0})
}

// Write a function that takes an array and a criteria function(for filtering) and returns the array of those elements which do not fulfill the criteria. The criteria function should take any element as argument and return a boolean value. 