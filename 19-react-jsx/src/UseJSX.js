import ClassComp from "./ClassComp";

export default function UseJSX() {
  // 1. 인라인 스타일 적용
  /* const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "gray",
    textalign: "center",
    color: "white",
    marginTop: ".5rem",
    display: "inline-block",
    border: "1px solid red",
  };
  return (
    <div>
      <div style={{ color: "#fff", width: "100px", backgroundColor: "tomato" }}>
        first
      </div>
      <div style={divStyle}>second</div>
      <div style={divStyle}>third</div>
      <div style={divStyle}>fourth</div>
    </div>
  ); */
  // 2. js 문법 사용해보기
  let isShow = false;

  function myFunc() {
    alert("안녕안녕");
  }

  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunc()}</span> */}
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌렸습니다.");
        }}
      >
        {isShow ? "true일 때 보임" : "!!!"}
      </div>
      <div style={{ backgroundColor: "red" }}>{isShow && "true일 때 보임"}</div>{" "}
      {/*+ 조건부 연산자. && 앞이 true일 떄 && 뒤를 실행 */}
      <div style={{ backgroundColor: "skyblue" }} onClick={myFunc}>
        {isShow === false ? "isShow가 false이군요!" : "true이군요!"}
      </div>
      <div style={{ backgroundColor: "purple" }}>
        {!isShow && "false일 때 보임"}
      </div>
      <div onClick={() => addNum(8, 5)}>
        8 더하기 5의 결과를 alert로 확인해봐요
      </div>
      <div onClick={() => myFunc()}>myFunc 실행</div>
      <br></br>
      <ClassComp />
      <br />
      <hr />
      <div className="div"></div>
    </div>
  );
}
