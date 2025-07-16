import { useState } from "react";
import { CodeBlock } from "./components/CodeBlock";
import { DescriptionBlock } from "./components/DescriptionBlock";
import { PrintingBlock } from "./components/PrintingBlock";
import { Topics } from "./components/topics";
import { TopicsEnum } from "./components/topics/types";
import Layout from "./components/Layout";
import CODE_EXAMPLE from "./code-examples";

function App() {
  const [theme, setTheme] = useState<Partial<Record<TopicsEnum, string>>>({
    [TopicsEnum.IMPERATIVE_PROGRAMMING]: "State",
  });
  const [selectedTopic, setSelectedTopic] = useState<TopicsEnum>(
    TopicsEnum.IMPERATIVE_PROGRAMMING,
  );

  const subtopic = theme[selectedTopic];
  const codeExample = CODE_EXAMPLE[selectedTopic];
  const subtopicDescription = subtopic
    ? codeExample.topicsDescription[subtopic]
    : "";

  return (
    <Layout
      topics={
        <Topics setTheme={setTheme} setSelectedTopic={setSelectedTopic} />
      }
      codeBlock={
        <CodeBlock key={selectedTopic} codes={codeExample.codeExamples} />
      }
      description={
        <DescriptionBlock
          topic={selectedTopic}
          subtopic={subtopic}
          subtopicDescription={subtopicDescription}
        />
      }
      printingBlock={<PrintingBlock />}
    />
  );
}

export default App;
