import { atom, selector } from 'recoil';
import axios from 'axios';

export const pastelesState = atom({
  key: 'pastelesState',
  default: [],
});

export const allPastelesState = selector({
  key: 'allPastelesState',
  get: async ({ get }) => {
    const pasteles = get(pastelesState);
    try {
      const res = await axios.get('http://localhost:5000/api/pasteles' || 'https://pasteleria.herokuapp.com/api/pasteles');
      return res.data || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
});



