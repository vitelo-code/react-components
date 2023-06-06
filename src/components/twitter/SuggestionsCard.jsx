import React from "react";
import "./SuggestionsCard.css";
import { useState } from "react";

function SuggestionsCard() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userName, setUserName] = useState("Twitter");
  const [inputText, setInputText] = useState("");
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-suggestionsCard-button is-following"
    : "tw-suggestionsCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const searchUserName = () => {
    setUserName(inputText);
  };

  return (
    <>
      <article className="tw-searchUser">
        <input
          type="text"
          placeholder="User..."
          onChange={handleChange}
          value={inputText}
        />
        <button onClick={searchUserName}>Search...</button>
      </article>

      <article className="tw-suggestionsCard">
        <header className="tw-suggestionsCard-header">
          <img
            className="tw-suggestionsCard-avatar"
            alt="avatar from unavatar.io"
            src={`https://unavatar.io/twitter/${userName}`}
          />

          <div className="tw-suggestionsCard-info">
            <strong>{userName}</strong>
            <span className="tw-suggestionsCard-infoUserName">@{userName}</span>
          </div>
        </header>

        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            {text}
          </button>
        </aside>
      </article>
    </>
  );
}

export default SuggestionsCard;
