import { useRecoilState, useRecoilValue } from 'recoil';
import emptyTopping from './no_topping.svg';
import { filteredCakesState, allCakesState } from '../atoms/cakeAtom';
import { useState } from 'react';


function Filters() {

  const priceOptions = ['Menos de $100', 'De $100 a $200', 'De $200 a $300', 'De $300 a $400', 'De $400 a $500', 'Más de $500'];
  const priceComboOptions = ['Menos de $100', 'De $100 a $300', 'De $300 a $500', 'De $500 a $800', 'De $800 a $1000', 'Más de $1000'];
  const sizeOptions = ['Pequeño', 'Mediano', 'Grande'];
  const toppingOptions = ['Fondeau', 'Betun Italiano', 'Chantilly'];
  const orderByOptions = ['Nombre', 'Precio', 'Precio Combo', 'Topping', 'Tamaño'];

  const allCakes = useRecoilValue(allCakesState);
  const [filteredCakes, setFilteredCakes] = useRecoilState(filteredCakesState);


  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = allCakes.filter((cake) => {
      return cake.name.toLowerCase().search(value) !== -1;
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
    if (value === 'ordenar por') {
      setFilteredCakes(allCakes);
    } else {
      setFilteredCakes(cakes);
    }
  }

  const [Toggle, setToggle] = useState(false)

  return (
    <div className="bg-filters py-4 rounded-t-xl">
      <div className="md:hidden pl-4 justify-center flex">
        <button onClick={() => { setToggle(!Toggle) }} className="flex bg-pink-200 p-1 rounded-lg justify-center">
          <img alt="filter" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/28/000000/external-filter-advertising-kiranshastry-lineal-color-kiranshastry.png" />
        </button>
      </div>
      <div className={`${Toggle ? '' : 'hidden'} md:flex flex-col md:flex-row scale-75 lg:scale-100  justify-center space-x-2 text-gray-500 text-sm `}>
        <div className=" inline-flex items-center rounded-lg border-2 bg-white">
          <div className='p-2'>
            <img src="https://img.icons8.com/fluency-systems-regular/32/000000/search--v1.png" alt="search" />
          </div>
          <input type="text" onChange={(e) => handleSearch(e)} className="outline-none h-full bg-transparent placeholder:text-gray-500 placeholder:text-sm placeholder:font-semibold" placeholder="NOMBRE" />
        </div>
        <FilterSelect name="precio" options={priceOptions} filter={priceFilter} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
        <FilterSelect name="precio combo" options={priceComboOptions} filter={priceComboFilter} icon="https://img.icons8.com/fluency-systems-regular/32/000000/search-dollar.png" />
        <FilterSelect name="topping" options={toppingOptions} filter={toppingFilter} icon={emptyTopping} />
        <FilterSelect name="tamaño" options={sizeOptions} filter={sizeFilter} icon="https://img.icons8.com/external-those-icons-lineal-those-icons/28/000000/external-square-construction-industry-those-icons-lineal-those-icons.png" />
        <FilterSelect name="ordenar por" options={orderByOptions} filter={orderByFilter} icon="https://img.icons8.com/material-outlined/28/000000/generic-sorting.png" />
      </div>
    </div>
  )
}

const FilterSelect = ({ name, icon, options, filter }) => {
  return (
    <div className="inline-flex bg-white p-2 rounded-lg border-2">
      <div>
        <img src={icon} al="filter icon" />
      </div>
      <select onChange={(e) => { filter(e) }} className="font-semibold outline-none bg-transparent uppercase cursor-pointer focus-within:selection " id="precio">
        <option >{name}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}


export default Filters
