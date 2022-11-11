import React from "react";
import "../App.css";

//* чтобы btn не рендерился каждый раз вместе с input
//его лучше вынести из input

export const InputTag = ({ handleOnChange, inputValue, inputRef }) => {
  return (
    <input
      className="input"
      onChange={handleOnChange}
      value={inputValue}
      ref={inputRef}
    ></input>
  );
};
