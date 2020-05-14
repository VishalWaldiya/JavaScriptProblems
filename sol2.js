// Problem 1 Write a javascript function named reverse which takes a string argument and returns the reversed string.
function reverse(str) {
    return str.split('').reverse().join('');
}

// Problem 2 Given a javascript array of objects having a radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], write a comparator function to sort it

var myarray =[10,20,5,6,23,51] 

// accecnding operator

function radius_ascd_compartor(a,b) {
    return (a['radius']-b['radius'])
}
myarray.sort(radius_ascd_compartor)

// decending operator

function radius_decd_compartor(a,b) {
    return (b['radius']-a['radius'])
}
myarray.sort(radius_decd_compartor)

// Probelm 3 Write a javascript function named length_of_array, which takes an array as argument and returns the number of elements in that array (as opposed to what is given by the length property of the array). Remember undefined can also be an element if it is explicitly set at some index, e.g. x[5] = undefined;. This undefined should be counted, but elements which are not present in the array (as arrays can be sparse), should not be counted.
function length_of_array(array) {
    var count = 0;
    array.forEach(element => {
        count ++
    });
    return count
}