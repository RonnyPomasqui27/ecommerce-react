import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utlis/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) =>{
          return action.payload
        }
    }
})

export const getCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/cart`, getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addCartThunk = (productToCart) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api.academlo.tech/api/v1/cart', productToCart, getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
