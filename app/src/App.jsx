import { useState, useCallback } from "react";
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

  const onClickClose = () => setDisplay(false);
  /*
   * ↑の場合、入力ボックスに入力がある(onChangeTextステートが更新)度に、関数が再生成され、ChildAreaが再レンダリングされる要因となる
   * よって、useCallbackで関数が生成されるタイミングを設定してあげる必要がある
   */
  // const onClickClose = useCallback(() => setDisplay(false), [setDisplay]);

  return (
    <>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <hr />
        <button onClick={onClickDisplay}>表示</button>
        <ChildArea display={display} onClickClose={onClickClose}></ChildArea>
      </div>
    </>
  );
};
