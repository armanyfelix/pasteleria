import mi_pasteleria from './mi_pasteleria.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

function Navbar() {

  const [Menu, setMenu] = useState(false);

  return (
    <div className="bg-navbar text-white flex justify-between px-6 lg:px-16 xl:px-36 py-5">
      <Link to="/" className="flex items-center w-36 sm:w-full ">
        <img src={mi_pasteleria} alt="mi_pasteleria" />
      </Link>
      <div>
        <button onClick={() => { setMenu(!Menu) }} className=' md:hidden focus:brightness-75'>
          <img src="https://img.icons8.com/bubbles/44/000000/menu.png" alt="hamburger menu" />
        </button>
        <ul className={`${Menu ? 'absolute' : 'hidden'} flex flex-col  bg-pink-500 translate-x-1/2 right-1/2 p-2 items-center text-lg font-mono tracking-tight`} >
          <Links />
        </ul>
      </div>
      <ul className="hidden md:flex items-center space-x-4 text-lg font-mono tracking-tight">
        <Links />
      </ul>
    </div>
  )
}

const Links = () => {

  const location = useLocation();
  const path = location.pathname;



  return (
    <>
      <Link to="/">
        <button className={`${path === '/' && 'text-[#eecac2]'}`}>
          Pasteles
        </button>
      </Link>
      <Link to="/helados">
        <button className={`${path === '/helados' && 'text-[#eecac2]'}`}>
          Helados
        </button>
      </Link>
      <Link to="/galletas">
        <button className={`${path === '/galletas' && 'text-[#eecac2]'}`}>
          Galletas
        </button>
      </Link>
      <Link to="/nosotros">
        <button className={`${path === '/nosotros' && 'text-[#eecac2]'}`}>
          Nosotros
        </button>
      </Link>
      <Link to="/sucursales">
        <button className={`${path === '/sucursales' && 'text-[#eecac2]'}`}>
          Sucursales
        </button>
      </Link>
    </>
  )
}




export default Navbar
