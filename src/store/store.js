import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import{workApi} from '../services/workApi';
import{messageApi} from '../services/messageApi';
export const store = configureStore({
    reducer:{
         [messageApi.reducerPath]:messageApi.reducer,
        [workApi.reducerPath]:workApi.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(workApi.middleware,messageApi.middleware)

})
setupListeners(store.dispatch)