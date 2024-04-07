import { createContext } from "react";

export const ThemeContext = createContext(null); //+ null값은 Provider를 쓰지 않았을 때 전달되는 값. 기본적으로 provider를 써야하기 떄문에 보통 쓸 일이 없다.
