import { CodeBlock } from "../components/CodeBlock";
import { DescriptionBlock } from "../components/DescriptionBlock";
import Layout from "../components/layout";
import { PrintingBlock } from "../components/PrintingBlock";

const title = "Imperative Programming";
const description =
  "Imperative programming is a programming paradigm that focuses on describing how a program should perform tasks, using statements that change a program's state step by step.";
const topics = ["State", "Statements", "Control Flow"];

export const ImperativeProgramming = () => {
  return (
    <Layout
      descriptionBlock={
        <DescriptionBlock
          title={title}
          description={description}
          topics={topics}
        />
      }
      codeBlock={
        <CodeBlock
          codeString={"// This is a commentary" + "\n" + "const c = a + b"}
        />
      }
      something={<></>}
      printingBlock={<PrintingBlock />}
    />
  );
};
