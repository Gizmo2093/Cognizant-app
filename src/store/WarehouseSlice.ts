import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface warehouse{
  id: number,
  name: string,
  location:{
    lat: string,
    long: string
  },
  cars:{
    location: string,
    vehicles:[
      {
        _id: number,
        model: string,
        year_model: number,
        price: number,
        licensed: boolean,
        date_added: string,
        img: string
      }
    ]
  }
}

export const apiSlice = createApi({
  reducerPath: 'warehouseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => {
    return {
      fetchWarehouse: builder.query<warehouse[], number|void>({
        query(){
          return `/cars`
        }
      })
    }
  }
})

export const { useFetchWarehouseQuery } = apiSlice