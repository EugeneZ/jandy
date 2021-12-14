import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [COUNTER, setcounter] = useState(0);
  return (
    <div className="App">
      <button
        onClick={() => setcounter(COUNTER + 1)}
        style={{ backgroundColor: "olive", color: "white",width:100,height:100,fontSize:36,marginRight:25 }}
      >
        +
      </button>
      <span style={{width:100,height:100,fontSize:36 }}>COUNTER:{COUNTER}</span>
    </div>
  );
}

export default App;
