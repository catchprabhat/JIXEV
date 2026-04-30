import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InvestorsPage from "./pages/InvestorsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/investors" element={<InvestorsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;