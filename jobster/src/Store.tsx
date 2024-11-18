import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'

export const store = configureStore({
    reducer: {
        counter: userReducer
    },
})


export type RootState = ReturnType<typeof store.getState>; //type  hook to access the state
export type AppDispatch = typeof store.dispatch; // type hook to dispatch an action


