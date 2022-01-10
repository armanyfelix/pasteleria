function Header() {
  return (
    <div className="bg-header text-white px-4 lg:px-36 py-2 flex justify-between">
      <div>
        ENG |
      </div>
      <div className="space-x-5">
        <a href="/" className="hover:text-pink-200 cursor-pointer">Blog</a>
        <a href="/" className="hover:text-pink-200 cursor-pointer">Contacto</a>
      </div>
    </div>
  )
}

export default Header
