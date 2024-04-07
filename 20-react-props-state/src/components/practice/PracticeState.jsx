// 실습 해답

import { useState } from "react";

export function PracticeState() {
  const [number, setNumber] = useState(0);
  let variable = 0;
  function increase() {
    setNumber(number + 1);
    variable += 1;
    console.log(`변수(variable): ${variable}, 스테이트(number): ${number}`);
  }
  function decrease() {
    setNumber(number - 1);
    variable -= 1;
    console.log(`변수(variable): ${variable}, 스테이트(number): ${number}`);
  }
  /*+ 변수는 계속 1이 나온다
  >> state가 계속 재렌더링이 되기 때문에 변수가 초기화된다
  >> state와 함께 쓸 때 변수를 global하게 쓰는 건 주의해서 써야한다!
  (거의 state를 쓰기 때문에 react를 쓸 때 변수를 쓸 일이 많진 않다) */
  return (
    <div>
      <p>{number <= 7 ? number + "😊" : number + "😁"}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}
