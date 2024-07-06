import Main from "./components/main/main";
import Sidebar from "./components/sidebar/sidebar";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
      <Analytics />
    </>
  );
};

export default App;
