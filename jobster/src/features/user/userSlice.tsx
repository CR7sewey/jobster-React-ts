import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { addUserToLocalStorage, getFromLocalStorage } from '../../utils/localStorage';
import { redirect } from 'react-router-dom';

export type User = {
    name: string,
    email: string,
    token: string,
}

const initialState: { isLoading: boolean, user: User | null } = {
    isLoading: false,
    user: getFromLocalStorage(),
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            // console.log(name);
            // console.log(thunkAPI);
            // console.log(thunkAPI.getState());
            // thunkAPI.dispatch(openModal());
            console.log(user, 'a')
            const resp = await customFetch.post('/auth/login', user);
            console.log(resp.data, 'resp')

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
            const resp = await customFetch.post('/auth/register', user);
            console.log(resp.data)
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
                toast.warn('Wait a moment...')
                state.isLoading = true

            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
                console.log(action.payload)
                const { user } = action.payload;
                state.isLoading = false
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`welcome, ${user?.name}`);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error(payload)
            })
            .addCase(registerUser.pending, (state) => {
                toast.warn('Wait a moment...')
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ isLoading: boolean, user: User }>) => {
                const { user } = action.payload;
                state.isLoading = false
                state.user = user
                addUserToLocalStorage(user);
                toast.success(`welcome, ${user?.name}`);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false
                toast.error('Error')
            })
        //        toast.success(`You are registered, ${data.username}`);

    }
})

// Action creators are generated for each case reducer function
// export const { } = counterSlice.actions

export default userSlice.reducer

