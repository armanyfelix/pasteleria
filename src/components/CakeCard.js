

function CakeCard({ name, imageUrl, price, comboPrice, description, toppingType, size }) {
  const toppings = (t) => {
    switch (t) {
      case '0':
        return 'Fondeau';
      case '1':
        return 'Betun Italiano';
      case '2':
        return 'Chantilly';
      default:
        return 'Sin topping';
    }
  }
  const sizes = (s) => {
    switch (s) {
      case 'S':
        return 'Pequeño';
      case 'M':
        return 'Mediano';
      case 'L':
        return 'Grande';
      default:
        return 'Normal';
    }
  }
  return (
    <div className="bg-white md:flex pb-4 ring-2 ring-inset h-full mb-5 ring-gray-200 rounded-lg">
      {/* LEFT */}
      <div className="flex flex-col ">
        <h2 className="py-2 px-6 text-xl border-b-2 h-12 font-semibold">
          {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
        </h2>
        <div className="md:flex h-full p-4">
          <div className="flex mb-4 md:mb-0 justify-center w-full h-full">
            <img width="176px" height="176px" src={imageUrl} alt="pastel" />
          </div>
          <div className="flex flex-col">
            <p className="font-mono pl-1.5 text-gray-600 tracking-tighter">
              {description}
            </p>
            <div className="pt-4">
              <p>
                <span className="font-bold">Tamaño: </span>
                {sizes(size)}
              </p>
              <p>
                <span className="font-bold">Topping: </span>
                {toppings(toppingType)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex justify-center scale-75 sm:scale-100 ">

        <div className="flex mr-[0.1rem]">
          <div className=" flex flex-col items-center">
            <h2 className="bg-[#EB5E70] w-full text-center h-12 items-center justify-center flex  text-white text-sm font-mono">
              PASTEL
            </h2>
            <div className="m-3 flex flex-col items-center space-y-2">
              <p className="text-gray-600 text-sm font-bold font-mono tracking-tight">15 - 17 Personas</p>
              <h1 className="font-bold text-2xl">$<span className="text-4xl">{price.toFixed(2)}</span></h1>
              <p className="text-xs text-gray-400 font-semibold pb-5">*Sólo pastel</p>
              <button className=" bg-[#299798] border-[3px] border-[#299798] hover:bg-[#1e6f70] active:text-[#299798] active:bg-white rounded-3xl px-3 py-1 text-md text-white uppercase ">
                Seleccionar
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="bg-[#F7AA76] w-full text-center h-12 items-center justify-center flex  max-h-14 min-h-14 rounded-tr-lg text-white text-sm font-mono ">
            PAQUETE
          </h2>
          <div className="m-3 flex flex-col items-center space-y-2">
            <p className="text-gray-600 text-sm font-bold font-mono tracking-tight">Combo Fiesta</p>
            <h1 className="font-bold text-2xl">$<span className="text-4xl">{comboPrice.toFixed(2)}</span></h1>
            <p className="text-xs text-gray-400 font-semibold pb-5">*Bebidas incluidas</p>
            <button className=" border-[3px] border-[#299798] hover:bg-gray-200 active:bg-[#299798] active:text-white text-[#299798] rounded-3xl px-3 py-1 text-md uppercase ">
              Seleccionar
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CakeCard 
