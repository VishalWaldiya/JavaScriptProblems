// Problem1 Write a javascript function named is_integer which checks if the passed argument is an integer. You can use any mathematical operator or functions defined in the Math object.
function is_integer(val) {
    return ( typeof(val) == "number" && Math.floor(val)==val)
}

// Problem 2 Using the forEach function defined for an array, find the sum of the array of numbers. [function add_all(arr) {...}]
function add_all(arr) {
    var res = 0;
    arr.forEach(element => {
        res+=element
    });
    return res
}

// Problem 3 Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. [ Use the formula : c/5 = (f-32)/9, where c = temperature in celsius and f = temperature in fahrenheit]
function convert_temperature(from,temp) {
    if (from == "celsius") {
        return 1.8*temp + 32
    } else if (from == "fahrenheit") {
        return ((temp-32)*5)/9
    }
}

// Probelm 4 Write a factorial function that returns the factorial of a given number, n. Make sure you return the calculated value and not just print it. [function factorial(n){...}]
function factorial(n){
    var result = 1
    for(var i = n; i > 0; i--) {
        result *= i
    }
    return result
}

// Problem 5 Write a javascript function that converts a given amount of money into coins of denominations (1, 2, 5, 10 and 25). [function convert_to_coins(amount) {...}]. You may choose to print the coin denominations used on the console. E.g. convert_to_coins(87) should print 25 25 25 10 2.
function convertcoin(val) {
    arr = [25,10,5,2,1]

    dic = {
        '25':0,
        '10':0,
        '5' :0,
        '2' :0,
        '1' :0
    }

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        while(val%element) {
            dic[element] += 1
        }
    }
    return dic
}
