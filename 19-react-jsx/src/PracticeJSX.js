// 함수형 컴포넌트로 진행
import "./PracticeJSX.css";
export function PracticeJSX() {
  const name = "솔이";
  const animal = "앵무새";
  const underline = { textDecoration: "underline" };
  const a = 4;
  const b = 3;
  const title = "Hello World";
  return (
    <div>
      {/* 실습 1 */}
      <h2>
        제 반려 동물의 이름은 <span style={underline}>{name}</span>입니다.
        <br />
        <span style={underline}>{name}</span>는{" "}
        <span style={underline}>{animal}</span>입니다.
      </h2>
      <br />
      {/* 실습 2 */}
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>
      <br />
      {/* 실습 3 */}
      <div>{a > b && "a가 b보다 큽니다."}</div>
      <br />
      {/* 실습 4 */}
      <div className="prac4">
        <div className="title">{title}</div>
        <br />
        <div>
          <span>아이디: </span>
          <input type="text" />
        </div>
        <br />
        <div>
          <span>비밀번호:</span>
          <input type="password" />
        </div>
      </div>
    </div>
  );
}
