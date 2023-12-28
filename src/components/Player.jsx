import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setPlayerName(value.toUpperCase());
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            placeholder="Enter name"
            value={playerName}
            required
            onChange={handleChange}
          ></input>
        )}
        <span
          className="player-symbol
        "
        >
          {symbol}
        </span>
      </span>
      <button onClick={handleEditClick}>{`${
        isEditing ? "Save" : "Edit"
      }`}</button>
    </li>
  );
};

export default Player;
