import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import{messageApi} from '../services/messageApi';
import{workApi} from '../services/workApi';
export const store = configureStore({
    reducer:{
        // [messageApi.reducerPath]:messageApi.reducer,
        [workApi.reducerPath]:workApi.reducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(workApi.middleware)

})
setupListeners(store.dispatch)