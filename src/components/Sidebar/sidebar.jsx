import { NavLink } from 'react-router-dom';
import './style.css';
import { MdHome, MdInventory,MdAssignment, MdLocalShipping, MdPeople, MdChat,MdFactory,MdHistoryEdu} from 'react-icons/md';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>Beira mar Pescados</h2>
        <div className="underline"></div>
      </div>
      
      <div className="menu">
        <NavLink
          to="/home"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdHome className="icon" />
          <span>Home</span>
        </NavLink>

        {/* Estoque */}
        
        <NavLink
          to="/estoque"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdInventory className="icon" />
          <span>Controle de Estoque</span>
        </NavLink>

        {/* Gestão de Pedidos */}

        <NavLink
          to="/pedidos"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdAssignment className="icon" />
          <span>Getão de Pedidos</span>
        </NavLink>

        {/* Controle de produção */}

        <NavLink
          to="/produção"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdFactory className="icon" />
          <span>Controle de Produção</span>
        </NavLink>

        {/* Gestão de Entregas */}

        <NavLink
          to="/entregas"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdLocalShipping className="icon" />
          <span>Gestão de Entregas</span>
        </NavLink>

        {/* Histórico e Auditoria */}

        <NavLink
          to="/historico"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdHistoryEdu className="icon" />
          <span>Histórico e Auditoria</span>
        </NavLink>

        {/* Cadastro de Clientes */}

        <NavLink
          to="/cadastro"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdPeople className="icon" />
          <span>Cadastro de Clientes</span>
        </NavLink>

        {/* Comunicação */}

        <NavLink
          to="/comunicação"
          className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}
        >
          <MdChat className="icon" />
          <span>Comunicação</span>
        </NavLink>

      
      </div>
    </div>
  );
};
