// App > Box1 > Box2

import { useDispatch, useSelector } from "react-redux";
import { countMinus, countPlus } from "../store/module/counterReducer";
import { changeTF } from "../store/module/isDataReducer";

export function Box1() {
  return (
    <div style={{ border: "2px dashed pink", padding: "10px" }}>
      <h3>Box1</h3>
      <Box2 />
    </div>
  );
}
function Box2() {
  // 전체 state 가지고오기 //+ 좋은 방법은 아니라 실행은 되지만 경고창이 나온다
  //   const state = useSelector((state) => state);
  //   console.log(state);

  const isData = useSelector((state) => state.isData);
  const counter = useSelector((state) => state.counter);
  console.log(isData);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div style={{ border: "1.5px solid skyblue", padding: "10px" }}>
      <h3>Box2</h3>
      <p>count: {counter}</p>
      <p>isDate: {isData.toString()}</p>
      <button onClick={() => dispatch({ type: "counter/INCREMENT" })}>
        count+1
      </button>
      <button onClick={() => dispatch({ type: "counter/DECREMENT" })}>
        count-1
      </button>
      <button onClick={() => dispatch({ type: "isData/CHANGE" })}>
        to {(!isData).toString()}
      </button>
      <br />
      <button onClick={() => dispatch(countPlus())}>count +1</button>
      <button onClick={() => dispatch(countMinus())}>count -1</button>
      <button onClick={() => dispatch(changeTF())}>
        to {(!isData).toString()}
      </button>
    </div>
  );
}
