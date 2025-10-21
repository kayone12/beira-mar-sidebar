import { NavLink } from 'react-router-dom';
import './style.css';
import { MdHome } from 'react-icons/md';

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
      </div>
    </div>
  );
};
