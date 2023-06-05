import React from "react";
import "./SuggestionsCard.css";
import { useState } from "react";

function SuggestionsCard({ userName = "twitter", name = "Twitter" }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-suggestionsCard-button is-following"
    : "tw-suggestionsCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-suggestionsCard">
      <header className="tw-suggestionsCard-header">
        <img
          className="tw-suggestionsCard-avatar"
          alt="avatar from unavatar.io"
          src={`https://unavatar.io/twitter/${userName}`}
        />

        <div className="tw-suggestionsCard-info">
          <strong>{name}</strong>
          <span className="tw-suggestionsCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

export default SuggestionsCard;
