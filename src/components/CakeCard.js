function CakeCard() {
  return (
    <div className="bg-white ring-2 ring-inset ring-gray-200 rounded-lg">
      <div className="flex justify-between border-b-2 ">
        <h2 className="py-2 px-6 text-xl font-semibold">Pastel de Moka</h2>
        <div className="text-white text-sm font-mono">
          <button className="bg-red-400 h-full px-8 mr-[0.1rem] ">
            PASTEL
          </button>
          <button className="bg-yellow-400 h-full px-8 rounded-tr-lg">
            PAQUETE
          </button>
        </div>
      </div>
      <div className="flex py-2 px-6">
        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="pastel" className="w-32 h-32 object-cover" />
        <div className="mx-4 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>
            <span className="font-bold">Tamaño:</span> Grande
          </p>
          <p>
            <span className="font-bold">Topping:</span> Chocolate y Moka
          </p>
        </div>
        <div className="flex -mr-6">
          <div className="">
            <p className="text-gray-600 text-sm font-bold">15 - 17 Personas</p>
            <h1 className="font-bold text-xl">$<span className="text-3xl">450</span></h1>
            <button className="bg-red-400  px-8  ">
              AGREGAR
            </button>
          </div>
          <div>
            <p className="text-gray-600 text-sm font-semibold">$10.00</p>
            <button className="bg-red-400   ">
              AGREGAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CakeCard
