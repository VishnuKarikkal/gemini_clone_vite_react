import "./sidebar.css";
import assets from "../../assets/index";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { contextType } from "../../context/type";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompt, onSent, newChat } = useContext(Context) as contextType;

  const loadPrompt = async (promptTitle: string) => {
    await onSent(promptTitle);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="menu"
          onClick={() => {
            setExtended(!extended);
          }}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="new" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recents</p>
            {prevPrompt.map((prompt) => (
              <div
                key={prompt}
                className="recent-entries"
                onClick={() => {
                  loadPrompt(prompt);
                }}
              >
                <img src={assets.message_icon} alt="recent" />
                <p>{prompt.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entries">
          <img src={assets.question_icon} alt="question" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entries">
          <img src={assets.history_icon} alt="question" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entries">
          <img src={assets.setting_icon} alt="question" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
