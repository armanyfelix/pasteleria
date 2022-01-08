import { useState } from 'react';
import emptyTopping from './no_topping.svg';

function Filters() {
  const priceOptions = ['Menos de $100', 'De $100 a $300', 'De $300 a $500', 'De $500 a $800', 'De $800 a $1000', 'Más de $1000'];
  const sizeOptions = ['Pequeño', 'Mediano', 'Grande'];
  const toppingOptions = ['Fondeau', 'Betun Italiano', 'Chantilly'];
  const orderByOptions = ['Nombre', 'Precio', 'Precio Combo', 'Topping', 'Tamaño'];

  return (
    <div className="bg-filters py-4  rounded-t-xl">
      <form className="flex justify-center w-full space-x-2 text-gray-500 text-sm ">

        <div className=" inline-flex items-center rounded-lg p-2 border-2 bg-white ">
          <div className='pr-2'>
            <img src="https://img.icons8.com/fluency-systems-regular/32/000000/search--v1.png" alt="search" />
          </div>
          <input className="outline-none w-full placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold" placeholder="NOMBRE" />
        </div>

        <FilterSelect name="precio" options={priceOptions} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
        <FilterSelect name="precio combo" options={priceOptions} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
        <FilterSelect name="topping" options={toppingOptions} icon={emptyTopping} />
        <FilterSelect name="tamaño" options={sizeOptions} icon="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-square-construction-industry-those-icons-lineal-those-icons.png" />
        <FilterSelect name="ordenar por" options={orderByOptions} icon="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png" />

      </form>
    </div>
  )
}

const FilterSelect = ({ name, icon, options }) => {
  const [select, setSelect] = useState(false);

  return (
    <div className="inline-flex bg-white rounded-lg p-2 border-2 cursor-pointer">
    <button onClick={() => {setSelect(!select)}} className={`${select ? 'rotate-180' : 'rotate-0'} pr-1`}>
        <img src={icon} />
    </button>
      <select className="font-semibold outline-none uppercase cursor-pointer focus-within:selection " id="precio">
        <option defaultValue={true} >{name}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>

  )
}
const OrderBy = ({ name, icon, options }) => {
  const [select, setSelect] = useState(false);

  return (
    <div className="inline-flex bg-white rounded-lg p-2 border-2 cursor-pointer">
    <button onClick={() => {setSelect(!select)}} className={`${select ? 'rotate-180' : 'rotate-0'} pr-1`}>
        <img src={icon} />
    </button>
      <select className="font-semibold outline-none uppercase cursor-pointer focus-within:selection " id="precio">
        <option defaultValue={true} >{name}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>

  )
}

export default Filters
