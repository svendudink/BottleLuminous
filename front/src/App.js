import "./App.css";
import { serial } from "./helper/serial";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          serial();
          console.log("testrun6");
        }}
        style={{ position: "fixed", zIndex: "1000", paddingTop: "60px" }}
      >
        Add
      </button>
    </div>
  );
}

export default App;
