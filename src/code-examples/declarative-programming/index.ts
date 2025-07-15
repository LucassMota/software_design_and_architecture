import codeStrings from "./code-strings";

const topicsDescription: Record<string, string> = {
  "Expressions Over Statements":
    "Declarative code favors expressions (which return values) over statements (which perform actions). This leads to more composable and readable code.",
  Immutability:
    "In declarative programming, data is not mutated. Instead of modifying existing variables or structures, new ones are created with the desired changes.",
  "Function Composition":
    "Declarative programming encourages breaking logic into small, pure functions and composing them to build more complex behavior.",
  "Higher-Order Functions":
    "Functions like map, filter, and reduce are declarative constructs that encapsulate iteration and conditionals, improving clarity.",
  "Descriptive Over Procedural":
    "You describe what the data looks like instead of how to construct it. This is very common in JSX/React or even with DOM manipulation.",
  "Reactive Programming (React)":
    "In declarative reactive programming, you declare relationships between data, and updates happen automatically when source data changes.",
};

export const DECLARATIVE_PROGRAMMING = {
  title: "Declarative Programming",
  description:
    "Declarative programming is a paradigm that focuses on what the program should accomplish rather than how to accomplish it. You describe the desired result, and the underlying system takes care of the control flow and execution. In JavaScript, declarative programming is often contrasted with imperative programming. Instead of writing step-by-step instructions, you declare the logic and let the language features or libraries handle the details.",
  topicsDescription,
  codeExamples: codeStrings,
};
