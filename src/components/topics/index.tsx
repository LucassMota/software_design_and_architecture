import { TopicsEnum, SUBTOPICS } from "./types";

interface Props {
  setTheme: React.Dispatch<React.SetStateAction<Record<TopicsEnum, string>>>;
}

export const Topics = ({ setTheme }: Props) => {
  const topics = Object.values(TopicsEnum);

  const handleTopic = (topic: TopicsEnum, subtopic: string) => {
    setTheme((prev) => {
      return {
        ...prev,
        [topic]: subtopic,
      };
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#282A36",
        height: "100%",
        color: "white",
        padding: 24,
      }}
    >
      {topics.map((topic) => (
        <div key={topic}>
          {topic}
          <div>
            {SUBTOPICS[topic].map((subtopic) => (
              <div key={subtopic} onClick={() => handleTopic(topic, subtopic)}>
                {subtopic}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
