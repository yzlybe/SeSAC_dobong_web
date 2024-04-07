import { useState } from "react";

function Select() {
  const [fruit, setFruit] = useState("apple");
  const [bgc, setBgc] = useState("black");
  const [col, setCol] = useState("white");
  const [txt, setTxt] = useState("text");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        과일 :
        <select
          onChange={(e) => {
            setFruit(e.target.value);
          }}
        >
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="peach">복숭아</option>
        </select>
        배경색 :
        <select
          onChange={(e) => {
            setBgc(e.target.value);
          }}
        >
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        글자색 :
        <select
          onChange={(e) => {
            setCol(e.target.value);
          }}
        >
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
      </div>
      <div>
        내용 :
        <input
          type="text"
          placeholder="내용을 입력하세요."
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
      </div>
      <div style={{ width: "200px" }}>
        <img
          // src={require(`./${fruit}.jpg`)} // >> 이미지가 src폴더 안에 있을 경우
          src={`/${fruit}.jpg`} // >> 이미지가 public 폴더 안에 있을 경우
          alt={fruit}
          style={{ width: "100%" }}
        />
        <p style={{ backgroundColor: bgc, color: col, padding: "10px" }}>
          {txt}
        </p>
      </div>
    </div>
  );
}

export default Select;
