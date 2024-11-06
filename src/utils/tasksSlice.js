import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
    },
    reducers: {

        addTask: (state, action) => {
            if (action.payload.length > 0) {
                state.tasks.push(action.payload);
            }
        },

        deleteTask: (state, action) => {
            for (let i = 0; i<state.tasks.length; i++) {
                if (i == action.payload) {
                    state.tasks.splice(i, 1);
                }
            }
        }

    }
})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;