import BasicCss from "./components/BasicCss";
import ModuleCss from "./components/ModuleCss";
import { PracticeSass1, PracticeSass2 } from "./components/PracticeSass";
import Sass from "./components/Sass";
import StyledComp from "./components/StyledComp";

function App() {
  return (
    <>
      <h1>react에 style 적용하기</h1>
      {/* <BasicCss />
      <ModuleCss />
      <StyledComp /> */}
      {/* <Sass /> */}
      {/* <PracticeSass1 /> */}
      <PracticeSass2 />
    </>
  );
}

export default App;

// 실습
/* import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const RootDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  
}`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} 20s infinite linear;
  }
`;
const MyA = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app"></AppLogo>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
} 

export default App;
*/
