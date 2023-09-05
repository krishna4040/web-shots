import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name: "liked",
    initialState: [],
    reducers: {
        like : (state,action) => {
            state.push(action.payload);
        },
        unlike : (state,action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const {like,unlike} = slice.actions;
export default slice.reducer;