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
  const topic = theme ? Object.keys(theme)[0] : "";
  const subtopic = theme ? theme[topic as TopicsEnum] : "";
  const codeExample = CODE_EXAMPLE[topic as TopicsEnum];

  const mapSubtopicDescription = (): string | undefined => {
    if (subtopic) return codeExample.topicsDescription[subtopic];
  };

  return (
    <Layout
      topics={<Topics setTheme={setTheme} />}
      codeBlock={<CodeBlock codes={codeExample.codeExamples} />}
      description={
        <DescriptionBlock
          topic={topic}
          subtopic={subtopic}
          subtopicDescription={mapSubtopicDescription()}
        />
      }
      printingBlock={<PrintingBlock />}
    />
  );
}

export default App;
