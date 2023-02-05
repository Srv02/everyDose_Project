import "./App.css";
import { useState } from "react";
import { Lists, MyNav, Home } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const initialState = [
    { name: "Item1", qty: 4 },
    { name: "Item2", qty: 3 },
    { name: "Item3", qty: 2 },
  ];
  const [data, setData] = useState(initialState);

  return (
    <div>
      <MyNav expand="sm" />
      <div className="App">
        <Routes>
          <Route path="*" element={<Home data={data} />} />
          <Route
            path="/lists"
            element={<Lists data={data} setData={setData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
