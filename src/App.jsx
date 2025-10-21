import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { Login } from "./pages/Login/login.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
