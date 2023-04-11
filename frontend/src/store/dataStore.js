import DataReducer from '../reducer/DataReducer';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    Data: DataReducer,
  },
})

export default store