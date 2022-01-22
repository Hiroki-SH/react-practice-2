import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log("レンダリング");

  // Stateの定義
  const [num, setNum] = useState(0);

  // ボタンを押した時にStateをカウントアップ
  const onClickButton = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    alert();
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1> 
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <ColoredMessage color="blue" message="お元気ですが?" /> */}
      {/* <ColoredMessage color="pink" message="元気です!" /> */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};