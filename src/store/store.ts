import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './WarehouseSlice'
import CartReducer from './CartSlice'

// это общий стор
export const store = configureStore({
  reducer:{ 
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: CartReducer

  },
  middleware: (getDfaultMiddlware) => {
    return getDfaultMiddlware().concat(apiSlice.middleware)
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState> 