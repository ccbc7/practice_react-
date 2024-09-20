import "./styles.css"

export const ChildArea = (props) => {
  const { display } = props;
  return (
    <>
      {display && (
        <div className="child-area">
          <p>子コンポーネント</p>
        </div>
      )}
    </>
  );
};
