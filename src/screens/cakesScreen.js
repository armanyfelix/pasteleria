// import Filters from '../components/Filters';
import CakeCard from '../components/CakeCard';
import { constSelector, useRecoilState, useRecoilStateLoadable, useRecoilValue } from "recoil";
import { allCakesState, filteredCakesState } from '../atoms/cakeAtom';
import { Suspense, lazy, useEffect } from 'react';

import { useState } from 'react';
import emptyTopping from '../components/no_topping.svg';


// const Filters = lazy(() => import("../components/Filters"));

function Cakes() {

  const priceOptions = ['Menos de $100', 'De $100 a $200', 'De $200 a $300', 'De $300 a $400', 'De $400 a $500', 'Más de $500'];

  const priceComboOptions = ['Menos de $100', 'De $100 a $300', 'De $300 a $500', 'De $500 a $800', 'De $800 a $1000', 'Más de $1000'];

  const sizeOptions = [['Pequeño', 0], 'Mediano', 'Grande'];

  const toppingOptions = ['Fondeau', 'Betun Italiano', 'Chantilly'];
  
  const orderByOptions = ['Nombre', 'Precio', 'Precio Combo', 'Topping', 'Tamaño'];


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

  const priceFilter = (e) => {
    let value = e.target.value;
    let values = [];
    switch (value) {
      case 'Menos de $100':
        values = [0, 100];
        break;
      case 'De $100 a $200':
        values = [100, 200];
        break;
      case 'De $200 a $300':
        values = [200, 300];
        break;
      case 'De $300 a $400':
        values = [300, 400];
        break;
      case 'De $400 a $500':
        values = [400, 500];
        break;
      case 'Más de $500':
        values = [500, 1000000];
        break;
      default:
        break;
    }
    let result = allCakes.filter((cake) => {
      return cake.price <= values[1] && cake.price >= values[0];
    });
    if (value === 'precio') {
      setFilteredCakes(allCakes);
    } else {
      setFilteredCakes(result);
    }
  }

  const priceComboFilter = (e) => {
    let value = e.target.value;
    let values = [];
    switch (value) {
      case 'Menos de $100':
        values = [0, 100];
        break;
      case 'De $100 a $300':
        values = [100, 300];
        break;
      case 'De $300 a $500':
        values = [300, 500];
        break;
      case 'De $500 a $800':
        values = [500, 800];
        break;
      case 'De $800 a $1000':
        values = [800, 1000];
        break;
      case 'Más de $1000':
        values = [1000, 1000000];
        break;
      default:
        break;
    }
    let result = allCakes.filter((cake) => {
      return cake.comboPrice <= values[1] && cake.comboPrice >= values[0];
    });
    if (value === 'precio combo') {
      setFilteredCakes(allCakes);
    } else {
      setFilteredCakes(result);
    }
  }

  const toppingFilter = (e) => {
    let value = e.target.value;
    if (value === 'Fondeau') {
      value = '0';
    } else if (value === 'Betun Italiano') {
      value = '1';
    } else if (value === 'Chantilly') {
      value = '2';
    }
    let result = allCakes.filter((cake) => {
      return cake.toppingType === value;
    });
    if (value === 'topping') {
      setFilteredCakes(allCakes);
    } else {
      setFilteredCakes(result);
    }
  }

  const sizeFilter = (e) => {
    let value = e.target.value;
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
    if (value === 'tamaño') {
      setFilteredCakes(allCakes);
    } else {
      setFilteredCakes(result);
    }

  }

  const orderByFilter = (e) => {
    let value = e.target.value;
    const cakes = [...allCakes];	
    cakes.sort((a, b) => {
      if (value === 'Nombre') {
        return a.name.localeCompare(b.name);
      } else if (value === 'Precio') {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (value === 'Precio Combo') {
        return parseFloat(a.comboPrice) - parseFloat(b.comboPrice);
      } else if (value === 'Topping') {
        return a.toppingType.localeCompare(b.toppingType);
      } else if (value === 'Tamaño') {
        return a.size.localeCompare(b.size);
      }
    });
    console.log(cakes);
    if (value === 'ordenar por') {
      setFilteredCakes(allCakes);
    } else {
    setFilteredCakes(cakes);
    }
  }







  return (
    <div className="mx-20 lg:mx-36 mt-12">
      <div className="bg-filters py-4  rounded-t-xl">
        <form className="flex justify-center space-x-2 text-gray-500 text-sm ">
          <div className=" inline-flex items-center rounded-lg border-2 bg-white ">
            <div className='px-2'>
              <img src="https://img.icons8.com/fluency-systems-regular/32/000000/search--v1.png" alt="search" />
            </div>
            <input type="text" onChange={(e) => handleSearch(e)} className="outline-none w-full h-full bg-transparent placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold" placeholder="NOMBRE" />
          </div>

          <FilterSelect name="precio" options={priceOptions} filter={priceFilter} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
          <FilterSelect name="precio combo" options={priceComboOptions} filter={priceComboFilter} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
          <FilterSelect name="topping" options={toppingOptions} filter={toppingFilter} icon={emptyTopping} />
          <FilterSelect name="tamaño" options={sizeOptions} filter={sizeFilter} icon="https://img.icons8.com/external-those-icons-lineal-those-icons/32/000000/external-square-construction-industry-those-icons-lineal-those-icons.png" />
          <FilterSelect name="ordenar por" options={orderByOptions} filter={orderByFilter} icon="https://img.icons8.com/material-outlined/32/000000/generic-sorting.png" />

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
          !filteredCakes.length ? (
            <div className="text-center" key={0}>
              <div>
                <span className="font-mono text-2xl text-purple-400 ">No hay resultados</span>
              </div>
            </div>
          ) : (
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
          )
        }
      </div>
    </div>
  )
}

const FilterSelect = ({ name, icon, options, filter }) => {

  return (
    <div className="inline-flex bg-white rounded-lg p-2 border-2 cursor-pointer">
      <img src={icon} al="filter icon" />
      <select onChange={(e) => { filter(e) }} className="font-semibold outline-none uppercase cursor-pointer focus-within:selection " id="precio">
        <option >{name}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}


export default Cakes
