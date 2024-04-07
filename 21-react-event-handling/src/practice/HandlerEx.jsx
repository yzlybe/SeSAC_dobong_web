// 실습

import { useState } from "react";

export function HandlerEx1() {
  const [msg, setMsg] = useState("Hello World!");
  const changeMsg = () => {
    setMsg("Goodbye World!");
  };
  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={changeMsg}>클릭</button>
    </div>
  );
}

export function HandlerEx2() {
  const [color, setColor] = useState("black");
  const [txt, setTxt] = useState("검정색");
  const changeRed = () => {
    setColor("red");
    setTxt("빨간색");
  };
  const changeBlue = () => {
    setColor("blue");
    setTxt("파란색");
  };
  return (
    <div>
      <h1 style={{ color: color }}>{txt} 글씨</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
    </div>
  );
}

export function HandlerEx3() {
  const [visibility, setVisibility] = useState(true);

  const changeDisplay = () => {
    visibility ? setVisibility(false) : setVisibility(true);
  };
  return (
    <div>
      <button onClick={changeDisplay}>
        {visibility ? "사라져라" : "보여라"}
      </button>
      <h1 style={{ display: visibility ? "" : "none" }}>안녕하세요</h1>
    </div>
  );
}
