import { useEffect, useMemo, useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  //   [before] useMemo 사용 전
  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   }

  //   const location = isKorea ? "한국" : "외국"; //+ usememo는 부하를 주기 때문에 되도록이면 사용을 줄이고 이런 식으로 쓰는 편이 좋다

  //   [after] useMemo 사용
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 바뀔 때마다 실행됩니다.");
  }, [location]);
  return (
    <>
      <h3>UseMemo와 Object</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라 바꾸기</button>
    </>
  );
}
