// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { selectUser } from '../redux/userSlice';
//import userReducer2 from '../features/userSlice2'; // เพิ่ม import ของ slice ใหม่ที่สร้าง


export const store = configureStore({
    reducer: {
        user: userReducer,
        // user2: userReducer2, // เพิ่ม slice ใหม่เข้าไปใน reducer

    },
});
export default store;