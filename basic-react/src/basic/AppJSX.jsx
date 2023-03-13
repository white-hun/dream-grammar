import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "white";
  const list = ["우유", "요거트", "딸기", "바나나"];
  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <h2>world</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
