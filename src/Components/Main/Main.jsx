import React, { useEffect, useRef, useState } from "react";
import "./main.css";
import sendBtn from "../assets/send.svg";
import user from "../assets/user-icon.png";
import logo from "../assets/chatgptLogo.svg";

import { sendMsgToOpenAI } from "../openAi";

function Main() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello , How Can i help you ?",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([
      ...messages,
      {
        text,
        isBot: false,
      },
    ]);
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      {
        text,
        isBot: false,
      },
      { text: res, isBot: true },
    ]);
    console.log(res);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      await handleSend();
    }
  };

  // const handleQuery = async (e) => {
  //   const text = e.target.value;
  //   setMessages([
  //     ...messages,
  //     {
  //       text,
  //       isBot: false,
  //     },
  //   ]);
  //   const res = await sendMsgToOpenAI(text);
  //   setMessages([
  //     ...messages,
  //     {
  //       text,
  //       isBot: false,
  //     },
  //     { text: res, isBot: true },
  //   ]);
  // };

  return (
    <>
      <div className="main">
        <div className="chats">
          {messages.map((message, i) => {
            return (
              <div className={message.isBot ? "chat bot" : "chat"} key={i}>
                <img
                  src={message.isBot ? logo : user}
                  className="chatImg"
                  alt="Image"
                />
                <p className="text">{message.text}</p>
              </div>
            );
          })}
          <div ref={msgEnd} />
        </div>

        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onKeyDown={handleEnter}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Image" />
            </button>
          </div>
          <p className="copy">
            ChatGPT may produce inaccurate information about people , places or
            facts ChatGPT August 20 Version
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
