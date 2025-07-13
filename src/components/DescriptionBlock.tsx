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
    <>
      <p>{topic}</p>
      <p>{subtopic}</p>
      <p>{subtopicDescription}</p>
    </>
  );
};
