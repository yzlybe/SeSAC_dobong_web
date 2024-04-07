// 종합 실습 해답
import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import SelectAns from "./SelectAns";

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "txt",
  });
  console.log(data);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <SelectAns setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result data={data} />
      </div>
    </div>
  );
}
