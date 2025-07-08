// Example 1: Summing numbers in an array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Step-by-step mutation of \`sum\`
}

// Example 2: Finding the maximum number
const values = [9, 4, 13, 2, 7];
let max = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i]; // Update \`max\` when a larger value is found
  }
}

// Example 3: Reversing a string manually
const original = "hello";
let reversed = "";
for (let i = original.length - 1; i >= 0; i--) {
  reversed += original[i]; // Append characters in reverse order
}

// Example 4: Filtering even numbers
const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evens: any[] = [];
for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] % 2 === 0) {
    evens.push(mixedNumbers[i]); // Collect even numbers
  }
}

// Example 5: Counting occurrences of letters in a string
const text = "banana";
const letterCount: any = {};
for (let i = 0; i < text.length; i++) {
  const char = text[i];
  if (letterCount[char]) {
    letterCount[char]++; // Increment count if already exists
  } else {
    letterCount[char] = 1; // Initialize count
  }
}

export const IMPERATIVE_PROGRAMMING = {
  title: "Imperative Programming",
  description:
    "Imperative Programming is a programming paradigm that focuses on how a program operates. It uses statements that change a program’s state, step by step. You describe instructions the computer must follow to achieve a goal, much like giving a recipe with precise directions.",
  topics: ["State", "Statements", "Control Flow"],
  codeExamples: [
    {
      runExample: () => console.log(sum),
      example: `
    // Example 1: Summing numbers in an array
   const numbers = [1, 2, 3, 4, 5];
   let sum = 0;
   for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Step-by-step mutation of \`sum\`
   }
    `,
    },
    {
      runExample: () => console.log(max),
      example: `
  // Example 2: Finding the maximum number
  const values = [9, 4, 13, 2, 7];
  let max = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i]; // Update \`max\` when a larger value is found
    }
  }`,
    },
    {
      runExample: () => console.log(reversed),
      example: `
  // Example 3: Reversing a string manually
  const original = "hello";
  let reversed = "";
  for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i]; // Append characters in reverse order
  }`,
    },
    {
      runExample: () => console.log(evens),
      example: `
  // Example 4: Filtering even numbers
  const mixedNumbers = [1, 2, 3, 4, 5, 6];
  const evens = [];
  for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] % 2 === 0) {
      evens.push(mixedNumbers[i]); // Collect even numbers
    }
  }`,
    },
    {
      runExample: () => console.log(letterCount),
      example: `
  // Example 5: Counting occurrences of letters in a string
  const text = "banana";
  const letterCount = {};
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (letterCount[char]) {
      letterCount[char]++; // Increment count if already exists
    } else {
      letterCount[char] = 1; // Initialize count
    }
  } `,
    },
  ],
};
