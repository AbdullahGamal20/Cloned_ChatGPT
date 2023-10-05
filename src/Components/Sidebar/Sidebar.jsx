import React from "react";
import "./sidebar.css";
import logo from "../assets/chatgpt.svg";
import addBtn from "../assets/add-30.png";
import msg from "../assets/message.svg";
import home from "../assets/home.svg";
import bookmark from "../assets/bookmark.svg";
import roocket from "../assets/rocket.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="upperside">
        <div className="uppersideTop">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand">ChatGPT</span>
        </div>
        <button
          className="midBtn"
          onClick={() => {
            window.location.reload();
          }}
        >
          <img src={addBtn} alt="Image" />
          New Chat
        </button>
        <div className="uppersideBottom">
          <button className="query">
            <img src={msg} alt="Image" />
            What is Programming ?
          </button>
          <button className="query">
            <img src={msg} alt="Image" />
            How To Use an API ?
          </button>
        </div>
      </div>
      <div className="lowerside">
        <div className="listItems">
          <img src={home} alt="Image" className="listItemsImg" />
          <span>Home</span>
        </div>

        <div className="listItems">
          <img src={bookmark} alt="Image" className="listItemsImg" />
          <span>Save</span>
        </div>

        <div className="listItems">
          <img src={roocket} alt="Image" className="listItemsImg" />
          <span>Upgrade to Pro</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
