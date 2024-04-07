import { useRef } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moneyDeposit, moneyWithdraw } from "../store/module/bankReducer";

export default function Practice1() {
  const moneyRef = useRef();
  // const [money, setMoney] = useState(0);
  const money = moneyRef.current.value;
  const bank = useSelector((state) => state.bank); // Number
  const dispatch = useDispatch();

  console.log(money);
  return (
    <>
      <h1>코딩온 은행</h1>
      <h3>잔액: {bank}원</h3>
      <input
        type="number"
        // value={money}
        // onChange={(e) => setMoney(Number(e.target.value))}
        ref={moneyRef}
        step={100}
      />
      <button onClick={() => dispatch(moneyDeposit(money))}>입금</button>
      <button onClick={() => dispatch(moneyWithdraw(money))}>출금</button>
    </>
  );
}
