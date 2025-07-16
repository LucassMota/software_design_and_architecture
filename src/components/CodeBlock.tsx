import { useCodeTheme } from "./hooks/useCodeTheme";

type Code = {
  example: string;
  runExample: () => any;
  setCodeOutput: (value: any) => void;
};

interface Props {
  codes: Code[];
  setCodeOutput: (value: any) => void;
}

const Component = ({ example, runExample, setCodeOutput }: Code) => {
  const { formattedCode } = useCodeTheme(example);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ cursor: "pointer" }}
          onClick={() => setCodeOutput(runExample())}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export const CodeBlock = ({ codes, setCodeOutput }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#1a1b26",
        minHeight: "100%",
        minWidth: "100%",
        padding: 24,
      }}
    >
      {codes.map((item: Code) => (
        <Component
          example={item.example}
          runExample={item.runExample}
          setCodeOutput={setCodeOutput}
        />
      ))}
    </div>
  );
};
