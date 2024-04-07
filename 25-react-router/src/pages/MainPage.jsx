import { useSearchParams } from "react-router-dom";

export default function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();

  console.log(modeParams.get("mode")); // dark or null
  /*   if (modeParams.get("mode") === "dark") {
    document.querySelector(".MainPage").classList.add("dark");
  } else {
    document.querySelector(".MainPage").classList.remove("dark");
  } */
  return (
    /* 실습
    - mode가 dark면 classname으로 dark 추가,
    - scss에서 dark 클래스에 대한 스타일 추가
    */
    //  실습 해답
    <main className={`MainPage ${modeParams.get("mode")}`}>
      {/* <main className="MainPage"> */}
      <h2>여기는 홈입니다.</h2>
      <button onClick={() => setModeParams({ mode: "dark" })}>Dark mode</button>
    </main>
  );
}
