import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    loading: false,
    error: null,
    indexImage: 0 // ค่าเริ่มต้นของ indexImage
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setIndexImage: (state, action) => {
            state.indexImage = action.payload;
        },
    },
});

export const { setUser, setLoading, setError, setIndexImage } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
