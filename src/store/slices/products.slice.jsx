import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const productsSlice = createSlice({
  name: 'pruducts',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload
    }
  }
})

export const getProductsThunk = () => dispacth => {
  dispacth(setIsLoading(true))
  axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res => dispacth(setProducts(res.data.data.products)))
    .finally(() => dispacth(setIsLoading(false)))
}
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
