import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Histogram from "./components/Histogram";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/chart" element={<Histogram />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
