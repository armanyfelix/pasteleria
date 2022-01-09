import Filters from '../components/Filters';
import CakeCard from '../components/CakeCard';
import { constSelector, useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { allCakesState, filteredCakesState } from '../atoms/cakeAtom';
import { Suspense, lazy, useEffect } from 'react';

import { useState } from 'react';
import emptyTopping from '../components/no_topping.svg';


// const Filters = lazy(() => import("../components/Filters"));

function Cakes() {

  const priceOptions = ['Todos', 'Menos de $100', 'De $100 a $300', 'De $300 a $500', 'De $500 a $800', 'De $800 a $1000', 'Más de $1000'];
  const sizeOptions = ['Todos', 'Pequeño', 'Mediano', 'Grande'];
  const toppingOptions = ['Todos', 'Fondeau', 'Betun Italiano', 'Chantilly'];
  const orderByOptions = ['Todos', 'Nombre', 'Precio', 'Precio Combo', 'Topping', 'Tamaño'];


  const allCakes = useRecoilValue(allCakesState);
  const [filteredCakes, setFilteredCakes] = useState(allCakes);


  // setFilteredCakes(allCakes)
  // useEffect(() => {
  //   if (filteredCakes.length < 0) {
  //     setFilteredCakes(allCakes);
  //   }
  // })

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = allCakes.filter((cake) => {
      return cake.name.search(value) !== -1;
    });
    setFilteredCakes(result);
  }

  const handlePrice = (e) => {
    let value = e.target.value;
    let result = allCakes.filter((cake) => {
      return cake.price <= value;
    });
    setFilteredCakes(result);
  }

  const handleSize = (e) => {
    let value = e.target.value;
    console.log(value);
    if (value === 'Pequeño') {
      value = 'S';
    } else if (value === 'Mediano') {
      value = 'M';
    } else if (value === 'Grande') {
      value = 'L';
    }

    let result = allCakes.filter((cake) => {
      return cake.size === value;
    });
    setFilteredCakes(result);
  }

  const handleTopping = (e) => {
    let value = e.target.value;
    let result = allCakes.filter((cake) => {
      return cake.topping === value;
    });
    setFilteredCakes(result);
  }

  const handleOrderBy = (e) => {
    let value = e.target.value;
    let result = allCakes.sort((a, b) => {
      if (value === 'Nombre') {
        return a.name.localeCompare(b.name);
      } else if (value === 'Precio') {
        return a.price - b.price;
      } else if (value === 'Precio Combo') {
        return a.priceCombo - b.priceCombo;
      } else if (value === 'Topping') {
        return a.topping.localeCompare(b.topping);
      } else if (value === 'Tamaño') {
        return a.size.localeCompare(b.size);
      }
    });
    setFilteredCakes(result);
  }







  return (
    <div className="mx-20 lg:mx-36 mt-12">
      <div className="bg-filters py-4  rounded-t-xl">
        <form className="flex justify-center space-x-2 text-gray-500 text-sm ">
          <div className=" inline-flex items-center rounded-lg border-2 bg-white ">
            <div className='px-2'>
              <img src="https://img.icons8.com/fluency-systems-regular/32/000000/search--v1.png" alt="search" />
            </div>
            <input type="text" onChange={(e) => handleSearch(e)} className="outline-none w-full h-full bg-transparent  placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold" placeholder="NOMBRE" />
          </div>

          <FilterSelect name="precio" options={priceOptions} handler={handlePrice} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
          <FilterSelect name="precio combo" options={priceOptions} handler={handlePrice} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
          <FilterSelect name="topping" options={toppingOptions} handler={handleTopping} icon={emptyTopping} />
          <FilterSelect name="tamaño" options={sizeOptions} handler={handleSize} icon="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-square-construction-industry-those-icons-lineal-those-icons.png" />
          <FilterSelect name="ordenar por" options={orderByOptions} handler={handleOrderBy} icon="https://img.icons8.com/material-outlined/24/000000/generic-sorting.png" />

        </form>
      </div>
      {/* <Suspense fallback={<div>Loading... </div>}>
        <Filters />
      </Suspense> */}
      <div className='bg-container pt-10 pb-10 px-24'>
        {
          // allCakes.state === 'loading' ? (
          //   <div className="text-center" key={allCakes.state}>
          //     <div role="status">
          //       <span className="font-bold text-xl font-mono ">Loading...</span>
          //     </div>
          //   </div>
          // ) : (
 
            filteredCakes.map((pastel) => (
              <CakeCard key={pastel.id}
                name={pastel.name}
                imageUrl={pastel.imageUrl}
                price={pastel.price}
                comboPrice={pastel.comboPrice}
                description={pastel.description}
                toppingType={pastel.toppingType}
                size={pastel.size}
              />
            ))
        }
      </div>
    </div>
  )
}

const FilterSelect = ({ name, icon, options, handler }) => {
  const [select, setSelect] = useState(false);


  return (
    <div className="inline-flex bg-white rounded-lg p-2 border-2 cursor-pointer">
      <button onClick={() => { setSelect(!select) }} className={`${select ? 'rotate-180' : 'rotate-0'} pr-1`}>
        <img src={icon} />
      </button>
      <select onChange={(e) => {handler(e)}} className="font-semibold outline-none uppercase cursor-pointer focus-within:selection " id="precio">
        <option defaultValue={true} >{name}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  )
}


export default Cakes
