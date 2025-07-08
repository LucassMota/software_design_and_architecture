import { useCodeTheme } from "./hooks/useCodeTheme";

type Code = {
  example: string;
  runExample: () => void;
};

interface Props {
  codes: Code[];
}

const Component = ({ example, runExample }: Code) => {
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
        <button style={{ cursor: "pointer" }} onClick={runExample}>
          Run
        </button>
      </div>
    </div>
  );
};

export const CodeBlock = ({ codes }: Props) => {
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
        <Component example={item.example} runExample={item.runExample} />
      ))}
    </div>
  );
};
