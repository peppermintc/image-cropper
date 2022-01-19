import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import InstructionPage from "./components/InstructionPage/InstructionPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instruction" element={<InstructionPage />} />
      </Routes>
    </div>
  );
}

export default App;
