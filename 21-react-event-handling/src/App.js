import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import EntirePractice from "./practice/EntirePractice";
import { HandlerEx1, HandlerEx2, HandlerEx3 } from "./practice/HandlerEx";
import Select from "./practice/Select";

function App() {
  return (
    <div>
      <h1>합성 이벤트</h1>
      <SyntheticEvent />
      <Counter />
      <hr />
      <HandlerEx1 />
      <hr />
      <HandlerEx2 />
      <hr />
      <HandlerEx3 />
      <hr />
      <Select />
      <hr />
      <h2>종합 실습 해답</h2>
      <EntirePractice />
    </div>
  );
}

export default App;
