import React from "react";

interface Props {
  topics: React.ReactNode;
  description: React.ReactNode;
  codeBlock: React.ReactNode;
  printingBlock: React.ReactNode;
}

const Layout = (prop: Props) => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    width: "100vw",
    height: "100vh",
  };

  const boxStyle: React.CSSProperties = {
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 0,
    minHeight: "100%",
    backgroundColor: "#282A36",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>{prop.topics}</div>
      <div style={boxStyle}>{prop.description}</div>
      <div style={boxStyle}>{prop.codeBlock}</div>
      <div style={boxStyle}>{prop.printingBlock}</div>
    </div>
  );
};

export default Layout;
