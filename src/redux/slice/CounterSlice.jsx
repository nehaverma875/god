import { createSlice } from '@reduxjs/toolkit'





const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: (state) => {
     
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = CounterSlice.actions
export default    CounterSlice.reducer
