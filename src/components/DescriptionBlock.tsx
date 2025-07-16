interface Props {
  topic?: string;
  subtopic?: string;
  subtopicDescription?: string;
}
export const DescriptionBlock = ({
  topic,
  subtopic,
  subtopicDescription,
}: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#282A36",
        height: "100%",
        color: "#f3f3f3f3",
        padding: 24,
      }}
    >
      <p>{topic}</p>
      <p>{subtopic}</p>
      <p>{subtopicDescription}</p>
    </div>
  );
};
