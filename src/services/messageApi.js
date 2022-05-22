// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { apiRoutes,BASE_URL} from '../config/configApi'
// const messageApi = createApi({
//     reducerPath:'messageApi',
//     baseQuery:fetchBaseQuery({baseUrl:BASE_URL}),
//     endpoints:(builder) =>({
//         postMessage:builder.mutation({
//             query:(message) => ({
//                 url:apiRoutes.postMessage,
//                 method:'POST',
//                 body:message
//             }),
//             // transformResponse:(Response:any) =>Response.payload.data
//         }),
//     }),
    
// })
// export const{usePostMessageMutation}=messageApi
