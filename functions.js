/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(n){

  var newString = n.toString();

  return newString;

 }

 NumbertoString(42);


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 function increase(n){

  n++;
  return n;

 }

 increase(42);


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(n){

  n--;
  return n;

}

decrease(42);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x,y){

  var sum = x + y;
  return sum;

}

add(40,2);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(x,y){

  var difference = x - y;
  return difference;

}

subtract(44,2);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x,y){

  var product = x * y;
  return product;

}

multiply(11,4);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(x,y){

  var quotient = x / y;
  return quotient;

}

divide(88,2);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(x){

  x *= x;
  return x;

}

square(7);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate(operation, x, y){

  var result;

  if (operation == 'add') {

    result = x + y;
    console.log(x + ' + ' + y + ' = ' + result);
    return result;

  } else if (operation == 'subtract') {

    result = x - y;
    console.log(x + ' - ' + y + ' = ' + result);
    return result;

  } else if (operation == 'multiply') {

    result = x * y;
    console.log(x + ' * ' + y + ' = ' + result);
    return result;

  } else if (operation == 'divide') {

    result = x / y;
    console.log(x + ' / ' + y + ' = ' + result);
    return result;

  }

}

calculate('add', 40, 2);


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(a, b){

  if (a > b){

    return true;

  } else {

    return false;

  }

}

isGreaterThan(10,2);


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(a, b){

   if (a < b){

    return true;

  } else {

    return false;

  }

}

isLessThan(2,10);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(x, y){

  if (x === y) {

    return true;

  } else {

    return false;

  }

}

areEqual(42, 42);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x, y){

  var smallest = Math.min(x, y);
  return smallest;

}

minimum(10,2);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(x, y){

  var largest = Math.max(x, y);
  return largest;

}

maximum(10,2);


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n){

  if (n % 2 === 0){

    return true;

  } else {

    return false;

  }

}

isEven(42);


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n){

  if (n % 2 !== 0){

    return true;

  } else {

    return false;

  }

}

isOdd(101);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score, total){

var grade;

  if ((score / total) * 100 >= 90){

    grade = 'A';

  } else if ((score / total) * 100 >= 80){

    grade = 'B';

  } else if ((score / total) * 100 >= 70){

    grade = 'C';

  } else if ((score / total) * 100 >= 60){

    grade = 'D';

  } else {

    grade = 'F';

  }

  return grade;

}

letterGrade(9,10);

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

