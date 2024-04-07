import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunction";
import PracticeLifeCycle1 from "./components/PracticeLifeCycle1";
import PracticeLifeCycle2 from "./components/PracticeLifeCycle2";
import PracticeRef from "./components/PracticeRef";
import { PracticeRefEx1, PracticeRefEx2 } from "./components/PracticeRefEx";
import Container from "./components/practiceAns/Container";
import PostList from "./components/practiceAns/PostList";
// import { RefClass1, RefClass2 } from "./components/RefClass";
// import { RefFunction1, RefFunction2 } from "./components/RefFunction";

function App() {
  return (
    <div className="App">
      {/* <h1>Ref</h1> */}
      {/* <RefClass1 />
      <hr />
      <RefClass2 />
      <hr />
      <RefFunction1 />
      <hr />
      <RefFunction2 /> */}
      {/* <hr />
      <PracticeRef />
      <hr />
      <PracticeRefEx1 />
      <hr />
      <PracticeRefEx2 /> */}
      <hr />
      <h1>life cycle</h1>
      {/* <LifeCycleClass />
      <hr />
      <LifeCycleFunc /> */}
      {/* <PracticeLifeCycle1 /> */}
      {/* <PracticeLifeCycle2 /> */}
      <Container>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
