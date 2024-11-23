import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

type User = {
    name: string,
    email: string,
    token: string,
}

const initialState: { isLoading: boolean, user: User | null } = {
    isLoading: false,
    user: null,
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            // console.log(name);
            // console.log(thunkAPI);
            // console.log(thunkAPI.getState());
            // thunkAPI.dispatch(openModal());
            const resp = await customFetch('/auth/login', user);

            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg);
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {
            // console.log(name);
            // console.log(thunkAPI);
            // console.log(thunkAPI.getState());
            // thunkAPI.dispatch(openModal());
            const resp = await customFetch('/auth/register', user);

            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data?.msg);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        /*loginUser: (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
            console.log(action)
            state.user = {
                ...action.payload.user,
                token: action.payload.user.token,
            };
            localStorage.setItem("user", JSON.stringify(state.user));
            state.isLoading = false
            toast.success(`welcome, ${state?.user?.name}`);
        },*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
                const { user } = action.payload;
                state.isLoading = false
                state.user = user
                toast.success(`welcome, ${user?.name}`);
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
                state.isLoading = false
                toast.error(action.payload)
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
                const { user } = action.payload;
                state.isLoading = false
                state.user = user
                toast.success(`welcome, ${user?.name}`);
            })
            .addCase(registerUser.rejected, (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
                state.isLoading = false
                toast.error('Error')
            })
        //        toast.success(`You are registered, ${data.username}`);

    }
})

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default userSlice.reducer

