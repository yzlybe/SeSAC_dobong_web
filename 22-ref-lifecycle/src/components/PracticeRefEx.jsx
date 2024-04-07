import { useRef, useState } from "react";

export function PracticeRefEx1() {
  // 1. state 이용
  // style 적용을 위한 state
  const [bgc, setBgc] = useState("");
  // 버튼을 클릭해야 style이 적용되도록 하기 위한 state
  const [inputBgc, setInputBgc] = useState("");
  const changeBgc = () => {
    setBgc(inputBgc);
    inputRef.current.focus();
    setInputBgc("");
  };
  const inputRef = useRef();
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "200px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: bgc,
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setInputBgc(e.target.value);
        }}
        value={inputBgc}
        ref={inputRef}
      />
      <button onClick={changeBgc}>색 적용</button>
    </div>
  );
  // 2. ref 이용
  /*   const [inputBgc, setInputBgc] = useState("");
  const inputRef = useRef();
  const bgcRef = useRef();
  const changeBgc = () => {
    bgcRef.current.style.backgroundColor = inputBgc;
    inputRef.current.focus();
    setInputBgc("");
  };
  return (
    <div
      style={{
        border: "1px solid gray",
        width: "200px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={bgcRef} 
    >
      <input
        type="text"
        onChange={(e) => {
          setInputBgc(e.target.value);
        }}
        value={inputBgc}
        ref={inputRef}
      />
      <button onClick={changeBgc}>색 적용</button>
    </div>
  ); */
}

export function PracticeRefEx2() {
  // 랜덤한 값 출력
  const operators = ["+", "-", "*"];
  const pickOperater = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 11);
  const num2 = Math.floor(Math.random() * 11);

  const inputRef = useRef();

  const submitAnswer = () => {
    let result;
    switch (pickOperater) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
    }
    console.log(inputRef);
    if (String(result) === inputRef.current.value) {
      alert("정답입니다!👏");
    } else {
      alert(`오답입니다😥 정답은 ${result} 입니다.`);
    }
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        width: "200px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        {num1} {pickOperater} {num2}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={submitAnswer}>정답 제출</button>
    </div>
  );
}
