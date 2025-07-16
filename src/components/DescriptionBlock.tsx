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
        height: "height: calc(100% - 24px);",
        color: "#f3f3f3f3",
        padding: "0 24px",
      }}
    >
      <p>{topic}</p>
      <p>{subtopic}</p>
      <p>{subtopicDescription}</p>
    </div>
  );
};
