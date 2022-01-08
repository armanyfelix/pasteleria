import mi_pasteleria from './mi_pasteleria.svg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

  const location = useLocation();

  return (
    <div className="bg-navbar text-white flex justify-between px-16 py-5">
      <div className="flex items-center">
        <img src={mi_pasteleria} alt="mi_pasteleria" />
      </div>
      <ul className="flex items-center space-x-4 text-lg font-mono tracking-tight">
        <Link to="/">
          <button className={`${location.pathname === '/' && 'text-[#eecac2]'}`}>
            Pasteles
          </button>
        </Link>
        <Link to="/helados">
          <button className={`${location.pathname === '/helados' && 'text-[#eecac2]'}`}>
            Helados
          </button>
        </Link>
        <Link to="/galletas">
          <button className={`${location.pathname === '/galletas' && 'text-[#eecac2]'}`}>
            Galletas
          </button>
        </Link>
        <Link to="/nosotros">
          <button className={`${location.pathname === '/nosotros' && 'text-[#eecac2]'}`}>
            Nosotros
          </button>
        </Link>
        <Link to="/sucursales">
          <button className={`${location.pathname === '/sucursales' && 'text-[#eecac2]'}`}>
            Sucursales
          </button>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
