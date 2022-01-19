import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./page/HomePage/HomePage";
import InstructionPage from "./page/InstructionPage/InstructionPage";

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
