export default function Test() {
  const state = useSelecter((state) => state);
  console.log(state);

  // dispatch가 action을 담아서 reducer에 보냅니다.
  // reducer는 action의 type에 따라서 state를 변경합니다.

  const dispatch = useDisPatch();
  return (
    <>
      <h4>state 값 가져오기</h4>
      <p>state에 저장되어 있는 number state: {state}</p>

      <h4>state 값 변경하기</h4>
      <button>1 증가</button>
      <button>1 감소</button>
    </>
  );
}
