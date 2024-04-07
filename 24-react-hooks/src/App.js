// import logo from "./logo.svg";
// import './App.css';

import UseReducer from "./components/UseReducer";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import useTitle from "./hooks/useTitle";
import CustomHook from "./components/CustomHook";
import Form from "./components/UseForm";
import PracticeUseForm from "./components/PracticeUseForm";

function App() {
  useTitle("React hook!");
  return (
    <>
      <h1>react hook</h1>
      {/* <UseMemo />
      <UseMemoObj /> */}
      {/* <UseCallback />
      <UseCallback2 /> */}
      {/* <UseReducer /> */}
      {/* <CustomHook /> */}
      {/* <Form /> */}
      <PracticeUseForm />
    </>
  );
}

export default App;
