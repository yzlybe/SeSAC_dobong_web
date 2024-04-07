import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function Student() {
  const navigate = useNavigate();
  const { studentName } = useParams();
  const [nameParams, setNameParams] = useSearchParams();
  console.log(nameParams.get("name"));
  const Name = styled.span`
    color: blue;
  `;
  const RealName = styled.span`
    color: red;
  `;
  const StudentDiv = styled.div`
    background-color: yellowgreen;
    margin: 0;
    padding: 10px;
  `;
  return (
    <StudentDiv>
      <p>
        학생 이름은 <Name>{studentName}</Name> 입니다.
      </p>
      {nameParams.get("name") && (
        <p>
          실제 학생 이름은 <RealName>{nameParams.get("name")}</RealName> 입니다.
        </p>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </StudentDiv>
  );
}
