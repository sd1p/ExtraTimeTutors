import React from "react";
import { useState, useEffect } from "react";

const Question = ({ question }) => {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState(-1);
  const [firstClick, setFirstClick] = useState(true);

  useEffect(() => {
    setChecked(false)
    setClicked(-1)
    setFirstClick(true)
    },[question])

  const handleClick = (e) => {
    e.preventDefault();
    //console.log(e.currentTarget.id);
    setClicked(e.currentTarget.id);
    setChecked(true);
    setFirstClick(false);
  };
  return (
    <div className="question">
      <p className="question-text">
        {question.id}. {question.question}
      </p>

      <button
        key={0}
        id={0}
        className={`options btn btn-sm btn-${
          !checked
            ? 'outline-secondary'
            : question.answer == 0
            ? "success"
            : clicked == 0
            ? "danger"
            : "outline-secondary disabled"
        }`}
        onClick={(e) => {
          if (firstClick) handleClick(e);
        }}
      >
        <p className="option-text">{question.options[0]}</p>
      </button>

      <button
        key={1}
        id={1}
        className={`options btn btn-sm btn-${
          !checked
            ? "outline-secondary"
            : question.answer == 1
            ? "success"
            : clicked == 1
            ? "danger"
            : "outline-secondary disabled"
        }`}
        onClick={(e) => {
          if (firstClick) handleClick(e);
        }}
      >
        <p className="option-text">{question.options[1]}</p>
      </button>

      <button
        key={2}
        id={2}
        className={`options btn btn-sm btn-${
          !checked
            ? "outline-secondary"
            : question.answer == 2
            ? "success"
            : clicked == 2
            ? "danger"
            : "outline-secondary disabled"
        }`}
        onClick={(e) => {
          if (firstClick) handleClick(e);
        }}
      >
        <p className="option-text">{question.options[2]}</p>
      </button>
      <button
        key={3}
        id={3}
        className={`options btn btn-sm btn-${
          !checked
            ? "outline-secondary"
            : question.answer == 3
            ? "success"
            : clicked == 3
            ? "danger"
            : "outline-secondary disabled"
        }`}
        onClick={(e) => {
          if (firstClick) handleClick(e);
        }}
      >
        <p className="option-text">{question.options[3]}</p>
      </button>
    </div>
  );
};
export default Question;
