import { FunctionProps } from "./FunctionProps";

export default function PropsMap({ arr }) {
  console.log(arr);
  return (
    <div>
      {arr.map((el, index) => {
        return (
          <ul key={index}>
            <li>이름: {el.name}</li>
            <li>개수: {el.number}</li>
            <li>가격: {el.price}</li>
          </ul>
        );
      })}

      {/*+ <FunctionProps name={"apple"} number={5} price={5000} /> * n줄 // map 사용 전엔 일일히 값을 넣어줘야 했다*/}

      {arr?.map((el, index) => {
        return (
          <FunctionProps name={el.name} number={el.number} price={el.price} />
        );
      })}
      {!arr && <h1>배열이 전달되지 않았습니다.</h1>}
    </div>
  );
}
