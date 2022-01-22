import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1> 
      {/* <p style={contentStyle}>お元気ですか？</p> */}
      {/* <ColoredMessage color="blue" message="お元気ですが?" /> */}
      {/* <ColoredMessage color="pink" message="元気です!" /> */}
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};