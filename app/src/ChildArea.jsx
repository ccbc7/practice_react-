import "./styles.css";
// memoは、propsに変更がない限り、このコンポーネントを再レンダリングしない
import { memo } from "react";

export const ChildArea = memo((props) => {
  const { display, onClickClose} = props;
  console.log("ChildAreaがレンダリングされた!");

  /*
   * 負荷の高い処理を想定
   * 0から2000までの配列のキーを展開した１つの配列を作成
   */
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log(data);
  });

  return (
    <>
      {display && (
        <div className="child-area">
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      )}
    </>
  );
});
