import React, { useState } from "react";
import "./App.css";
import { UserList } from "./Component/UserList";
import { Navigation } from "./Component/NavBaar";

function App() {
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState("");
  return (
    <div className="App">
      <Navigation setNameSearch={setNameSearch} setRateSearch={setRateSearch} />
      <UserList nameSearch={nameSearch} rateSearch={rateSearch} />
    </div>
  );
}

export default App;
