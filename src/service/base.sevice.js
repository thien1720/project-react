import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const StoreBaseQuery = fetchBaseQuery({
  baseUrl : "http://localhost:8000/products/",

  // prepareHeaders : ()

});

export {StoreBaseQuery}
