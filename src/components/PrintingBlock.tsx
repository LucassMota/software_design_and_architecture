interface Props {
  output: any;
}

export const PrintingBlock = ({ output }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(33 33 33)",
        height: "100%",
        padding: "32px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgb(26 26 26)",
          color: "#f3f3f3f3",
          padding: 16,
        }}
      >
        {">_"}{" "}
        <div style={{ color: "#4ef700", padding: "0 8px" }}>{output}</div>
      </div>
    </div>
  );
};
