
// Minimum
// My first attempt

// Your code here.

function min(x, y) {
  if (y > x) return x
  if (x > y) return y
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Somewhat proud of this one. It was a little confusing. 
//Wrote it in the sandbox first. And managed to get a result!

// The solution from Eloquent Javascript

//function min(a, b) {
//  if (a < b) return a;
//  else return b;
//}

//Recursion
//My first attempt

//This one is much harder.

function isEven(n) {
	if(n == 0) return true
	else if(n == 1) return false
}

// A lot more confusing honestly.
// Looking at the solution I can see how this work.
// I hope to practice this exercise with some variations
// in the future

console.log("my recursion test: " + isEven(50));
// → true
console.log("my recursion test: " + isEven(75));
// → false
console.log("my recursion test: " + isEven(-1));
// → ??

//

//function isEven(n) {
//	if (n == 0) return true;
//	else if (n == 1) return false;
//	else if (n < 0) return isEven(-n);
//	else return isEven(n - 2);
//}

function isEvenTest(n) {
	if (n == 0) return true
		else if (n == 1) return false
		else if (n < 0) return isEvenTest(-n)
		else return isEvenTest(n - 2)
}

console.log(isEvenTest(50));
// → true
console.log(isEvenTest(75));
// → false
console.log(isEvenTest(3));
// → ??

console.log("The future says:", future())

function future() {
	return "you'll never have hoverboards";
}

//Bean Counting
//Testing and attempts

var stringTest = "testing"

var character = 'W';
var character2 = 'w';

if (character == character.toUpperCase()) {
 console.log('upper case true');
}
if (character2 == character.toLowerCase()){
 console.log('lower case true');
}

console.log(stringTest[1] + stringTest[0])

// My first Attempt

function countBs(str) {
  if (str == str.toUpperCase()) {
    return true
  } else {
    return false
  }
}

//var int = 0

//function countBs(str) {
//  if (str[0] && str[1] && str[2] == str.toUpperCase()) {
//  }
//}
//        :s
// Checking if strings  

/////////////////////////////////////////////////////////////

// The solution

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



