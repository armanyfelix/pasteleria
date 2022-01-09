import { atom, selector } from 'recoil';
import axios from 'axios';



export const filteredCakesState = atom({
  key: 'filteredCakesState',
  default: [],
});


export const allCakesState = selector({
  key: 'allCakesState',
  get: async ({ get }) => {
  
    // const cakes = get(filteredCakesState);
    try {
      const res = await axios.get('http://localhost:5000/api/pasteles');
      return res.data || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
});



