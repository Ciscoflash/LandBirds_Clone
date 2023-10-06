import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1 className="bg-red-400">We Begin Here</h1>
      <div className="card">
        <p>This is the entry point for our project</p>
      </div>
    </>
  );
}

export default App;
