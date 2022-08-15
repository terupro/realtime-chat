import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="joinChatContainer">
        <h3>チャットに参加する</h3>
        <input type="text" placeholder="お名前" />
        <input type="text" placeholder="ルーム番号" />
        <button>ルームに参加</button>
      </div>
    </div>
  );
}

export default App;
