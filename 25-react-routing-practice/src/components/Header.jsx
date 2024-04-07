import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderSpace = styled.header`
  height: 80px;
  margin: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: aliceblue;
`;
const HeaderDiv = styled.div`
  width: 30%;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLink = styled(Link)`
  text-decoration: none;
  color: green;
`;

export default function Header() {
  return (
    <HeaderSpace>
      <HeaderDiv>
        <HeaderLink to="/">홈으로</HeaderLink>
        <HeaderLink to="/student/allie">학생</HeaderLink>
        <HeaderLink to="/student/codingon">코딩온</HeaderLink>
        <HeaderLink to="/student/new?name=jisoo">query</HeaderLink>
      </HeaderDiv>
    </HeaderSpace>
  );
}
