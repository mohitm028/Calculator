import React, { useState } from "react";
import "./index.scss";

function Calculator() {
  // const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const handleClick = (symbol) => {
    switch (symbol) {
      case "1":
        return setQuestion(`${question}1`);
      case "2":
        return setQuestion(`${question}2`);
      case "3":
        return setQuestion(`${question}3`);
      case "4":
        return setQuestion(`${question}4`);
      case "5":
        return setQuestion(`${question}5`);
      case "6":
        return setQuestion(`${question}6`);
      case "7":
        return setQuestion(`${question}7`);
      case "8":
        return setQuestion(`${question}8`);
      case "9":
        return setQuestion(`${question}9`);
      case "0":
        return setQuestion(`${question}0`);
      case "+":
        return setQuestion(`${question}+`);
      case "-":
        return setQuestion(`${question}-`);
      case "/":
        return setQuestion(`${question}/`);
      case "*":
        return setQuestion(`${question}*`);
      case "%":
        return setQuestion(`${question}%`);
      case ".":
        return setQuestion(`${question}.`);
      case "AC":
        return setQuestion("");
      case "Del":
        return setQuestion(question.substr(0, question.length - 1));
      case "=":
        return setQuestion(eval(question));
      default:
        return null;
    }
  };
  return (
    <div className="calculator__main">
      <div className="calculator__container">
        <input
          type="text"
          placeholder="Calculator"
          id="calculator "
          name="calculator"
          value={question}
          //   onChange={(e) => {
          //     e.target.value = e.target.value.replace(/\D/g, "");
          //   }}
        />
        <div className="calculator__numPad">
          <div
            className="calculator__number "
            onClick={() => handleClick("AC")}
          >
            AC
          </div>
          <div
            className="calculator__number "
            onClick={() => handleClick("Del")}
          >
            Del
          </div>
          <div className="calculator__number " onClick={() => handleClick("%")}>
            %
          </div>
          <div className="calculator__number " onClick={() => handleClick("/")}>
            /
          </div>
          <div className="calculator__number " onClick={() => handleClick("7")}>
            7
          </div>
          <div className="calculator__number " onClick={() => handleClick("8")}>
            8
          </div>
          <div className="calculator__number " onClick={() => handleClick("9")}>
            9
          </div>
          <div className="calculator__number " onClick={() => handleClick("*")}>
            *
          </div>
          <div className="calculator__number " onClick={() => handleClick("4")}>
            4
          </div>
          <div className="calculator__number " onClick={() => handleClick("5")}>
            5
          </div>
          <div className="calculator__number " onClick={() => handleClick("6")}>
            6
          </div>
          <div className="calculator__number " onClick={() => handleClick("-")}>
            -
          </div>
          <div className="calculator__number " onClick={() => handleClick("1")}>
            1
          </div>
          <div className="calculator__number " onClick={() => handleClick("2")}>
            2
          </div>
          <div className="calculator__number " onClick={() => handleClick("3")}>
            3
          </div>
          <div className="calculator__number " onClick={() => handleClick("+")}>
            +
          </div>
          <div className="calculator__number "> </div>
          <div className="calculator__number " onClick={() => handleClick("0")}>
            0
          </div>
          <div className="calculator__number " onClick={() => handleClick(".")}>
            .
          </div>
          <div className="calculator__number " onClick={() => handleClick("=")}>
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
