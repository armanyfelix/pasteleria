import mi_pasteleria from './mi_pasteleria.svg';

function Navbar() {
  return (
    <div className="bg-navbar text-white flex justify-between px-16 py-5">
      <div className="flex items-center">
        <img src={mi_pasteleria} alt="mi_pasteleria" />
      </div>
      <ul className="flex items-center text-lg font-mono">
        <li className="mr-4">
          <a href="/">
            Pasteles
          </a>
        </li>
        <li className="mr-4">
          <a href="/helados">
            Helados
          </a>
        </li>
        <li className="mr-4">
          <a href="/galletas">
            Galletas
          </a>
        </li>
        <li className="mr-4">
          <a href="nosotros">
            Nosotros
          </a>
        </li>
        <li className="mr-4">
          <a href="sucursales">
            Sucursales
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
