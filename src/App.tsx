import Main from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <>
      {console.log(import.meta.env.VITE_GEMINI_API_KEY, "key kkeuy")}

      <Sidebar />
      <Main />
      <Analytics />
    </>
  );
};

export default App;
