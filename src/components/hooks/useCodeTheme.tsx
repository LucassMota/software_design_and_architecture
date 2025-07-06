import { useState, useEffect } from "react";
import { codeToHtml } from "shiki";

export const useCodeTheme = (codeString: string) => {
  const [formattedCode, setFormattedCode] = useState(codeString);

  const getTheme = async () => {
    const theme = await codeToHtml(codeString, {
      lang: "javascript",
      theme: "tokyo-night",
    });

    setFormattedCode(theme);
  };

  useEffect(() => {
    getTheme();
  }, []);

  return {
    formattedCode,
  };
};
