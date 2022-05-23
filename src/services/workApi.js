import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const workApi = createApi({
    reducerPath:'workApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://sheltered-earth-52104.herokuapp.com/"}),
    endpoints:(builder) => ({
        getProject:builder.query({
            query:() => "project/allProject",
        })

    })  ,  
})
export const{useGetProjectQuery}=workApi;