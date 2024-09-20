import { useState } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";

export const App = () => {
  console.log("App");
  const [text, setText] = useState("");
  const [display, setDisplay] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="App">
        <input />
        <hr />
        <button onClick={onClickDisplay}>表示</button>
        <ChildArea display={display}></ChildArea>
      </div>
    </>
  );
};
