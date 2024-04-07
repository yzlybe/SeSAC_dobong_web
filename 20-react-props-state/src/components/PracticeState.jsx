import { useState } from "react";

// 실습
export function PracticeState() {
  const [number, setNumber] = useState(0);
  function increase() {
    setNumber(number + 1);
  }
  function decrease() {
    setNumber(number - 2);
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>2 감소</button>
    </div>
  );
}

// 추가 실습 1
export function PracticeState1() {
  const [number, setNumber] = useState(0);
  function increase() {
    setNumber(number + 1);
  }
  function decrease() {
    setNumber(number - 1);
  }
  return (
    <div>
      <p>
        {number}
        {number < 8 ? "✨" : "💙"}
      </p>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}

// 추가 실습 2
export function PracticeState2(props) {
  const { objArr } = props;
  const [index, setIndex] = useState(0);
  const change = () => {
    if (index === objArr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  console.log(objArr);
  return (
    <div>
      <p>이름: {objArr[index].name}</p>
      <p>나이: {objArr[index].age}</p>
      <p>별명: {objArr[index].nickName}</p>
      <button onClick={change}>멤버 바꾸기</button>
    </div>
  );
}
