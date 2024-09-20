import { useState } from "react";
import "./styles.css";

export const App = () => {
  console.log("App")
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>アプリケーション</h1>
      <h2>こんばんは</h2>
      <p>{count}</p>
      <button onClick={onClickAdd}>カウンタ</button>
    </div>
  );
};
