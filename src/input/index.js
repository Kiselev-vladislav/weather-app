import React, { useRef, useContext } from "react";
import { GlobalCotext } from "../App";
import "../App.css";
import { InputTag } from "./inputTag";

//* чтобы btn не рендерился каждый раз вместе с input
//его лучше вынести из input

export const InputWrap = () => {
  const inputRef = useRef(null);
  const {
    dispatch,
    state: { inputValue, editingCity },
  } = useContext(GlobalCotext);

  const handleOnAdd = () => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
      inputRef.current.focus();
    }
  };

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
      inputRef.current.focus();
    }
  };

  const handleOnChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: event.target.value,
    });
  };
  return (
    <div className="inputWrap">
      <input
        className="input"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      ></input>
      {editingCity ? (
        <button className="btn" onClick={handleOnDone}>
          done
        </button>
      ) : (
        <button className="btn" onClick={handleOnAdd}>
          +
        </button>
      )}
    </div>
  );
};
