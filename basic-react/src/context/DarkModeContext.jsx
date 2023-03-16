import { createContext, useState } from "react";

// 데이터를 Context에 담고있다
export const DarkModeContext = createContext();

// 데이터를 보여주기 위한 싸개
// context를 만들 때 항상 Provider도 만들어 줘야한다
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    // 자식 컴포넌트와 공유할 내용 value로 지정 (다크모드 인지 아닌지에 대한 상태변수, toggling 함수)
    <DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
