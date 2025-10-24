import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { Login } from "./pages/Login/login.jsx";
import Estoque from "./pages/Estoque/Estoque.jsx";
import Pedidos from "./pages/Pedidos/Pedidos.jsx"
import Produção from "./pages/Produção/Produção.jsx";
import Entregas from "./pages/Entregas/Entregas.jsx"
import Historico from "./pages/Historico/Historico.jsx";  
import Cadastro from "./pages/Cadastro/Cadastro.jsx";
import Comunicação from "./pages/Comunicação/Comunicação.jsx";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/produção" element={<Produção />} />
      <Route path="/entregas" element={<Entregas />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/comunicação" element={<Comunicação />} />

    </Routes>
  );
};

export default App;
