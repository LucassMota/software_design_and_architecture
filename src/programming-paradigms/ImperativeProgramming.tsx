import { IMPERATIVE_PROGRAMMING } from "../code-strings/imperative-programming";
import { CodeBlock } from "../components/CodeBlock";
import { DescriptionBlock } from "../components/DescriptionBlock";
import Layout from "../components/layout";
import { PrintingBlock } from "../components/PrintingBlock";

export const ImperativeProgramming = () => {
  return (
    <Layout
      descriptionBlock={
        <DescriptionBlock
          title={IMPERATIVE_PROGRAMMING.title}
          description={IMPERATIVE_PROGRAMMING.description}
          topics={IMPERATIVE_PROGRAMMING.topics}
        />
      }
      codeBlock={<CodeBlock codes={IMPERATIVE_PROGRAMMING.codeExamples} />}
      something={<></>}
      printingBlock={<PrintingBlock />}
    />
  );
};
