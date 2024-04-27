import { combineReducers, createSlice } from '@reduxjs/toolkit';
import allProducts from '../data';

const initialState = {
  value: 0,
  products: allProducts,
  price: 0,
  total: 0
};

export const productSlice = createSlice({
  name: 'products', 
  initialState,
  reducers: {
   increaseAmount:(state, {payload})=>{
    const item = state.products.find((product)=>{
      return product.id == payload;
    })
    item.amount += 1;
    productSlice.caseReducers.calculateTotal(state)
   },

   decreaseAmount:(state, {payload})=>{
    const item = state.products.find((product)=>{
      return product.id == payload;
    })
    item.amount -= 1;
    productSlice.caseReducers.calculateTotal(state)
   }, 

   removeItem:(state, {payload})=>{
    productSlice.caseReducers.calculateTotal(state)
   },

   calculateTotal: (state)=>{
    let price = 0
    let total = 0

    state.products.forEach((product)=>{
      total = total + product.amount;
      price = price + product * product.price;
    })

    state.price = price;
    state.total =total;
   }

  }
});


export const { decreaseAmount, increaseAmount, calculateTotal, removeItem } = productSlice.actions;


export default productSlice.reducer;
