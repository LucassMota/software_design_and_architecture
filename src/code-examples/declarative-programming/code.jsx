import { useState } from "react";

// Expressions Over Statements
const doubled = [1, 2, 3].map((x) => x * 2);
const runExample1 = () => console.log(doubled);

// Immutability
// Declarative (does not mutate original array)
const nums = [1, 2, 3];
const newNums = [...nums, 4];
const runExample2 = () => console.log(newNums);

// Function Composition
const double = (x) => x * 2;
const increment = (x) => x + 1;
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

const process = pipe(increment, double);
const runExample3 = () => console.log(process(3));

// Higher-Order Functions
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true },
];

const activeUsers2 = users
  .filter((user) => user.active)
  .map((user) => user.name);
const runExample4 = () => console.log(activeUsers2);

// Descriptive Over Procedural
const Button = () => (
  <button onClick={() => alert("Clicked!")}>Click Me</button>
);

// Reactive Programming (React)
const Counter = () => {
  const [count, setCount] = useState(0);

  const doubled = count * 2;

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Doubled: {doubled}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export { runExample1, runExample2, runExample3, runExample4 };
