import * as example from "./code";

const codeStrings = [
  {
    runExample: () => example.runExample1,
    example: `
    // Expressions Over Statements
    const doubled = [1, 2, 3].map((x) => x * 2);
    const runExample1 = () => console.log(doubled);
  `,
  },
  {
    runExample: () => example.runExample2,
    example: `
    // Immutability
    // Declarative (does not mutate original array)
    const nums = [1, 2, 3];
    const newNums = [...nums, 4];
    const runExample2 = () => console.log(newNums);`,
  },
  {
    runExample: () => example.runExample3,
    example: `
    // Function Composition
    const double = (x) => x * 2;
    const increment = (x) => x + 1;
    const pipe =
      (...fns) =>
      (x) =>
        fns.reduce((v, f) => f(v), x);

    const process = pipe(increment, double);
    const runExample3 = () => console.log(process(3));
    `,
  },
  {
    runExample: () => example.runExample4,
    example: `
    // Higher-Order Functions
    const users = [
      { name: "Alice", active: true },
      { name: "Bob", active: false },
      { name: "Carol", active: true },
    ];

    const activeUsers2 = users
      .filter((user) => user.active)
      .map((user) => user.name);
    const runExample4 = () => console.log(activeUsers2);`,
  },
  {
    runExample: () => undefined,
    example: `
    // Descriptive Over Procedural
    const Button = () => (
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    );
    `,
  },
  {
    runExample: () => undefined,
    example: `
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
      `,
  },
];

export default codeStrings;
