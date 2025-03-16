import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import default export

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;