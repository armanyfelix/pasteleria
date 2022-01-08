import emptyTopping from './no_topping.svg';

function Filters() {
  return (
    <div className="bg-filters py-4  rounded-t-xl">
      <form className="flex justify-center w-full space-x-2 text-gray-500 text-sm ">

        <div className=" inline-flex rounded-lg p-2 border-2 bg-white ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input className="outline-none w-full placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold" placeholder="NOMBRE" />
        </div>

        <FilterSelect name="precio" icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png"/>
        <FilterSelect name={"precio combo"} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
        <FilterSelect name="topping" icon={emptyTopping} />
        <FilterSelect name="tamaño" icon="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-square-construction-industry-those-icons-lineal-those-icons.png" />
        <FilterSelect name="ordenar por" icon="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png" />

      </form>
    </div>
  )
}

const FilterSelect = ({name, icon}) => {

  return (
    <div className="inline-flex bg-white rounded-lg p-2 border-2 cursor-pointer">
      <img src={icon} />
      <select className="font-semibold  uppercase cursor-pointer focus-within:selection " id="precio">
        <option defaultValue={true} >{name}</option>
        <option>1</option>
        <option>2</option>
      </select>
    </div>

  )
}

export default Filters
