import { useCodeTheme } from "./hooks/useCodeTheme";

interface Props {
  codeString: string;
}

export const CodeBlock = ({ codeString }: Props) => {
  const { formattedCode } = useCodeTheme(codeString);
  return (
    <div style={{ backgroundColor: "#1a1b26", height: "100%", padding: 24 }}>
      <div dangerouslySetInnerHTML={{ __html: formattedCode }} />
    </div>
  );
};
