import "./App.css";
import { useNavigate } from "react-router-dom";
import AppRouting from "./AppRouting";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [sideView, setSideView] = useState(false);

  return (
    <div className="App">
      <div className="header">
        <h1>Ganesh App</h1>
        <button onClick={() => setSideView(!sideView)}>Toggle SideView</button>
      </div>

      <div className="d-flex">
        <div className="sidebar flex-column">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/counter")}>Counter</button>
        </div>

        <div className="mainContent">
          <AppRouting />
        </div>

        {sideView && (
          <div className="sideView">
            SideView
            <button onClick={() => setSideView(!sideView)}>
              Close SideView
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
