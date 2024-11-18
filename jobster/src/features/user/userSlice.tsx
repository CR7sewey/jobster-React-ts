import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

type User = {
    name: string,
    email: string,
    token: string,
}

const initialState: { isLoading: boolean, user: User | null } = {
    isLoading: false,
    user: null,
}

export const counterSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<{ isLoading: boolean, user: User | null }>) => {
            console.log(action)
            state.user = {
                ...action.payload.user,
                token: action.payload.token,
            };
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success(`welcome, ${state?.user?.name}`);
        },

    },
})

// Action creators are generated for each case reducer function
export const { loginUser } = counterSlice.actions

export default counterSlice.reducer

