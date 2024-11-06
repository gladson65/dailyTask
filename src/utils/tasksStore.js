import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasksSlice.js';

const taskStore = configureStore({
    reducer : {
        task: taskReducer,
    }
})

export default taskStore;