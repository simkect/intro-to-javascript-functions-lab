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
  if (
    char === "a" ||
    "A" ||
    "e" ||
    "E" ||
    "i" ||
    "I" ||
    "o" ||
    "O" ||
    "u" ||
    "U"
  ) {
    console.log("Exercise 3 Result: true");
  } else {
    console.log("Exercise 3 Result: false");
  }
};
isCharVowel("a");

const generateEmail = (str1, str2) => {
  return `Exercise 4 Result:, ${str1} ${str2}`;
};
generateEmail(ja, zarazno);
