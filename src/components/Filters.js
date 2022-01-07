function Filters() {
  return (
    <div className="bg-filters p-4 px-20 rounded-t-xl">
      <form className="flex space-x-4 text-gray-500 text-sm ">
        <div className=" inline-flex rounded-lg p-2 border-2 bg-white ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input className="outline-none placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold" placeholder="NOMBRE" />
        </div>
        <div className="inline-flex bg-white rounded-lg p-2 border-2 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <select className="font-semibold bg-transparent cursor-pointer focus-within:selection " id="precio">
            <option selected>PRECIO</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>


      </form>
    </div>
  )
}

export default Filters
