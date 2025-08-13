import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk('counter/fetchData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return data
})


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer