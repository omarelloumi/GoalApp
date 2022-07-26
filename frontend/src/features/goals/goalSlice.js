import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}





export const goalSlice = createSlice({
    name: 'goal',
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = ''
      },
    }
    }
)

export const { reset } = goalSlice.actions
export default goalSlice.reducer

