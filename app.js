const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};
console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

const isAdult = (number) => {
  if (number > 18) {
    console.log("Exercise 2 Result: Adult");
  } else {
    console.log("Exercise 2 Result: Minor");
  }
};
isAdult(21);

const isCharVowel = (char) => {
  if (char === "a" || "A" || "e" || "E" || "i" || "I" || "o" || "O" || "u" || "U") {
    console.log("Exercise 3 Result: true");
  } else {
    console.log("Exercise 3 Result: false");
  }
};
isCharVowel("a");

const generateEmail = (str1, str2) => {
  return `Exercise 4 Result: ${str1}@${str2}.com`;
};
console.log(generateEmail("jonsmith", "example"));

const greetUser = (name, daytime) => {
    if (daytime === "morning" || daytime ==="afternoon" || daytime==="evening");
        return `Good ${daytime}, ${name}`;
}
console.log("Exercise 5 Result:", greetUser("Sam", "morning"))

const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3)
        return num1
    else if (num1 < num2 && num2 > num3)
        return num2
    else if (num3 > num2 && num1 < num3)
        return num3
}
console.log('Exercise 6 Result:', maxOfThree(5,10,8))

const calculateTip =(bill, tip) => {
    tip=tip/100*bill;
    return tip;
}

console.log('Exercise 7 Result:', calculateTip(50,20))

const converTemperature = (temp, scale) => {
    if (scale === "F") 
        return (temp*9/5)+32 + "F"
    else (scale === "C")
        return (temp-30)/2 + "C"
}
console.log('Exercise 8 Result:', converTemperature(32,"C"))

const basicCalculator = (num1, num2, op) => {
    if (op === "add") 
        return num1 + num2
    else if (op === "subtract")
        return num1 - num2
    else if (op === "multiply")
        return num1 * num2
    else (op === "devide")
        return num1 / num2
}

console.log('Exercise 9 Result:', basicCalculator(10,5,"subtract"))

const calculateGrade = (num) => {
    if (num > 90) return "A"
    else if (num === 80 || 81 || 82 || 83 || 84 || 85 || 86 || 87 || 88 || 89) return "B"
    else if (num === 70 || 71 || 72 || 73 || 74 || 75 || 76 || 77 || 78 || 79) return "C"
    else if (num === 60 || 61 || 62 || 63 || 64 || 65 || 66 || 67 || 68 || 69) return "D"
    else if (num < 60) return "F"
}
console.log('Exercise 10 Result:', calculateGrade(85))

const createUsername = (str1, str2) => {
    num = str1.length + str2.length
    str1 = str1.slice(0,3)
    str2 = str2.slice(0,3)
    return str1 + str2 + num
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"))

function numArg() {
    x = arguments.length
    return x
}

console.log('Exercise 12 Result:', numArg(1,2,3,4))
