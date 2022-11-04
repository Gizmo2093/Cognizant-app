import {  createSlice, PayloadAction } from '@reduxjs/toolkit'

interface cartItem{
  _id: number,
  model: string,
  year_model: number,
  price: number,
  licensed: boolean,
  date_added: string,
  img: string,
}

type CartState = {
  list: cartItem[]
}

const initialState: CartState = {
  list: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers:{
    addToCart(state, action: PayloadAction<cartItem>){
      state.list.push(action.payload) 
    },
    removeToCart(state, action: PayloadAction<number>){
      state.list = state.list.filter(el => { return el._id != action.payload })
    }
  }
})

export const { addToCart, removeToCart } = CartSlice.actions
export default CartSlice.reducer


