
// Pribelm 1 Write a constructor function to represent a Rectangle, which can calculate its area and perimeter. 
function Rectangle(height,width) {
    this.height = height,
    this.width = width,
    this.area = function () { return this.height * this.width}
}

// Probelem 3 Write a Point function which takes x and y coordinates as arguments to define it. It should also be able to evaluate the distance from another point. We may make use of this exercise in a later assignment problem when dealing with the Document Object Model. 
function Point(x,y) {
    this.x1 = x,
    this.y1 = y,
    this.distancefrom() = function() {
        return Math.sqrt(Math.pow(x2-this.x1,2)+Math.pow(y2-this.y1,2))
    }
}


// Probem 3 Write javascript code so that we can check if a string object is a palindrome. E.g. "xyx".isPalindrome() should return true. 
function isPalindrome(str) {
    return str.split("").reverse().join("");
}

String.prototype.isPalindrome = function() {
    return (this.split("").reverse().join("").valueOf()===this.valueOf());
}