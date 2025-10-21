import { Sidebar } from '../../components/Sidebar/sidebar';
import './style.css';
import { FaFish } from "react-icons/fa";
const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <FaFish />

      </main>
    </div>
  );
};

export default Home;