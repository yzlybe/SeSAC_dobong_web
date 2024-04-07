import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PinkButton from "../components/PinkButton";
import { reset } from "../store/module/mbti";

const Header = styled.header`
  font-size: 3rem;
`;
const Explanation = styled.p`
  font-size: 1.5rem;
  color: #777;
`;
const MbtiResult = styled.p`
  font-size: 3rem;
  color: dodgerblue;
`;
const Additional = styled.p`
  font-size: 2rem;
  color: orange;
`;
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`;

export default function Result() {
  const mbtiResult = useSelector((state) => state.mbti.mbtiResult);
  console.log(mbtiResult);
  const explanation = useSelector(
    (state) => state.mbti.explanations[mbtiResult]
  );
  console.log(explanation); // {text, img}
  // const result = explanation[mbtiResult]
  const dispatch = useDispatch();
  return (
    <>
      <Header>당신의 MBTI 결과</Header>
      <Explanation>{explanation.text}</Explanation>
      <MbtiResult>{mbtiResult}</MbtiResult>
      <Additional>이건 재미로 읽어보세요!</Additional>
      <AdditionalImg
        // src={`${process.env.PUBLIC_URL}/assets/${mbtiResult}.jpg`}
        src={`${process.env.PUBLIC_URL}${explanation.img}`}
        alt="MBTI 설명 이미지"
      />
      <PinkButton
        text={"다시 검사하기"}
        clickEvent={() => {
          dispatch(reset());
        }}
      />
    </>
  );
}
