import { useState } from "react";
import Popup from "./components/popup/Popup";

import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log("togglePopup");
  };

  return (
    <div className="App">
      <h1>Show Popup</h1>
      <button onClick={togglePopup} className="btn">
        Open
      </button>
      {showPopup ? <Popup togglePopup={togglePopup} /> : null}
    </div>
  );
}

export default App;
