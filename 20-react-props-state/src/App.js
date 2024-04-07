import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";
import { PracticeProps1, PracticeProps2 } from "./components/PracticeProps";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";
import "./App.css";
import {
  PracticeState,
  PracticeState1,
  PracticeState2,
} from "./components/PracticeState";
import PororoObj from "./components/practice/PororoObj";
import PropsMap from "./components/PropsMap";
import Alphabet from "./components/Alphabet";
import PracticeMap from "./components/PracticeMap";
import PracticeMap2 from "./components/PracticeMap2";
import PracticeMap2Ans from "./components/PracticeMap2Ans";

function App() {
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 2, price: 8500 },
  ];
  const memberArr = [
    {
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ];
  return (
    <div className="App">
      {/* <h1>hello, props</h1> */}
      {/* <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        // bgColor="black"
      />
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2 price={1000} name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2> */}
      {/* <PracticeProps1 food="맛있는 음식" /> */}
      {/* <hr />
      <PracticeProps2
        title="마흔에 읽는 쇼펜하우어"
        author="강용수"
        price="15300"
        type="철학"
      /> */}
      {/* <h1>hello, state</h1> */}
      {/* <ClassState />
      <FunctionState /> */}
      {/* <hr />
      <PracticeState />
      <hr />
      <PracticeState1 />
      <hr /> */}
      {/* <PracticeState2 objArr={memberArr} /> */}

      {/* 실습 해답 */}
      {/* <PororoObj /> */}

      {/* <h1>map과 filter 사용</h1> */}
      {/* <PropsMap arr={dataArr} /> */}
      {/* <Alphabet /> */}
      {/* <PracticeMap /> */}
      <hr />
      <PracticeMap2 />
      {/* <PracticeMap2Ans /> */}
    </div>
  );
}

export default App;
