import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const StoreBaseQuery = fetchBaseQuery({
  baseUrl : "https://webreacts.herokuapp.com/products/",

  // prepareHeaders : ()

});

export {StoreBaseQuery}
