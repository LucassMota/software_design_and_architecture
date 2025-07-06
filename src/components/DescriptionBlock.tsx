interface Props {
  title: string;
  description: string;
  topics: string[];
}

export const DescriptionBlock = ({ title, description, topics }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "#282A36",
        height: "100%",
        color: "white",
        padding: 24,
      }}
    >
      <h3>{title}</h3>
      <p style={{ lineHeight: 2 }}>{description}</p>
      <ul style={{ lineHeight: 2 }}>
        {topics.map((topic: string, index) => (
          <li key={`${topic} - ${index}`}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};
