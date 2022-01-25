import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import InstructionPage from "./pages/InstructionPage/InstructionPage";
import "./App.scss";

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
