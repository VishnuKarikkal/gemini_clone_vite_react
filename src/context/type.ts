export type contextType = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  recentPrompt: string;
  setRecentPromt: React.Dispatch<React.SetStateAction<string>>;
  prevPrompt: string[];
  setPrevPromt: React.Dispatch<React.SetStateAction<string[]>>;
  showResult: boolean;
  loading: boolean;
  geminiResponse: string;
  onSent: (prompt?: string) => Promise<void>;
  newChat: () => void;
};
