import Header from "./components/Header.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../src/pages/home.tsx";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
