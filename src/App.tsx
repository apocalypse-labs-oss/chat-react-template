import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Chat />
      </div>
    </>
  );
}

export default App;
