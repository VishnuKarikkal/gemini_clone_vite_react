import { useContext } from "react";
import assets from "../../assets";
import "./main.css";
import { Context } from "../../context/context";
import { contextType } from "../../context/type";

const Main = () => {
  const {
    input,
    geminiResponse,
    loading,
    onSent,
    recentPrompt,
    setInput,
    showResult,
  } = useContext(Context) as contextType;

  const callGemini = () => {
    if (input.trim() !== "") {
      onSent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      </div>
      <div className="main-container">
        {showResult ? (
          <div className="results">
            <div className="result-title">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="result" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: geminiResponse }}></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="greet">
              <p>
                <span>Hello, User!</span>
              </p>
              <p>How can I help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a promt here..."
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              onKeyDown={(e) => {
                e.key === "Enter" ? callGemini() : null;
              }}
            />
            <div>
              <img src={assets.gallery_icon} alt="glry" />
              <img src={assets.mic_icon} alt="mic" />
              {input.trim() !== "" && (
                <img
                  src={assets.send_icon}
                  alt="send"
                  onClick={() => callGemini()}
                />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Chat to start writing, planning, learning and more with Google AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
