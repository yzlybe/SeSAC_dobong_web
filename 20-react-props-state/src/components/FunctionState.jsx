import { useState } from "react";

// export default function FunctionState() {
//   let apple = "사과"; //+ 변수로 선언하면 어떻게 될까? > 실제 변수값은 바뀌지만 페이지에 적용되진 않는다

//   function inEnglish() {
//     apple = "apple";
//     console.log("변수값", apple);
//   }
//   return (
//     <div>
//       <div style={{ backgroundColor: "red", color: "#fff" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }
// export default function FunctionState() {
//   const [apple, setApple] = useState("사과"); //+ state를 사용하면 해당 컴포넌트만 재렌더링이 된다!

//   function inEnglish() {
//     setApple("apple");
//     console.log("state", apple);
//   }
//   return (
//     <div>
//       <div style={{ backgroundColor: "red", color: "#fff" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

// 3. 바닐라 JS로 사과 > apple > 사과 변경해보기
// export default function FunctionState() {
//   function changeLanguage() {
//     const apple = document.querySelector(".state div");
//     apple.innerText === "사과"
//       ? (apple.innerText = "apple")
//       : (apple.innerText = "사과");
//   }
//   return (
//     <div className="state">
//       <div style={{ backgroundColor: "red", color: "#fff" }}>사과</div>
//       <button onClick={changeLanguage}>언어 변경</button>
//     </div>
//   );
// }

// 3. useState로 사과 > apple > 사과 변경해보기
// export default function FunctionState() {
//   const [apple, setApple] = useState("사과");

//   function changeLanguage() {
//     apple === "사과" ? setApple("apple") : setApple("사과");
//   }
//   return (
//     <div>
//       <div style={{ backgroundColor: "red", color: "#fff" }}>{apple}</div>
//       <button onClick={changeLanguage}>언어 변경</button>
//     </div>
//   );
// }
//+ 해답
export default function FunctionState() {
  const [isEnglish, setIsEnglish] = useState(true);
  function changeLanguage() {
    setIsEnglish(!isEnglish);
  }
  return (
    <div>
      <div style={{ backgroundColor: "red", color: "#fff" }}>
        {isEnglish ? "apple" : "사과"}
      </div>
      <button onClick={changeLanguage}>
        {isEnglish ? "한글" : "영어"}로 변경
      </button>
    </div>
  );
}
