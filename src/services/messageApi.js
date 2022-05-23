import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const messageApi = createApi({
    reducerPath:'messageApi',
    baseQuery:fetchBaseQuery({baseUrl:"https://sheltered-earth-52104.herokuapp.com/"}),
    endpoints:(builder) =>({
        postMessage:builder.mutation({
            query:(data) => ({
                url:"contact",
                method:'POST',
                body:{...data}
            }),
   
        }),
    }),
    
})
export const{usePostMessageMutation}=messageApi
