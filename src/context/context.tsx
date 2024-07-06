import React, { useState } from "react";
import run from "../config/gemini";
import { contextType } from "./type";

export const Context = React.createContext<contextType | null>(null);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPromt] = useState("");
  const [prevPrompt, setPrevPromt] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState("");

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const typingEffect = (index: number, word: string) => {
    setTimeout(() => {
      setGeminiResponse((prev) => prev + word);
    }, 75 * index);
  };

  const formatResponse = (resultToBeFormated: string) => {
    const responseArray = resultToBeFormated.split("**");
    let formatResponseBoldStyle = "";
    responseArray.forEach((word, index) => {
      if (index === 0 || index % 2 !== 1) {
        formatResponseBoldStyle += word;
      } else {
        formatResponseBoldStyle += "<b>" + word + "<b>";
      }
    });

    const splitResponseWithNewLines = formatResponseBoldStyle
      .split("*")
      .join("<br />");

    // for the typing effect
    const formatResponseWithNewLines = splitResponseWithNewLines.split(" ");
    formatResponseWithNewLines.forEach((word, index) => {
      const nextWord = word;
      typingEffect(index, nextWord + " ");
    });
  };

  const onSent = async (prompt?: string) => {
    setGeminiResponse("");
    setLoading(true);
    setShowResult(true);
    setRecentPromt(prompt ?? input);
    setPrevPromt((prev) => [...prev, prompt ?? input]);

    // help GEMINI, help......
    const response = await run(prompt ?? input);
    //format the response
    formatResponse(response);

    setLoading(false);
    setInput("");
  };

  const contextValue: contextType = {
    input,
    setInput,
    recentPrompt,
    setRecentPromt,
    prevPrompt,
    setPrevPromt,
    showResult,
    loading,
    geminiResponse,
    onSent,
    newChat,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
