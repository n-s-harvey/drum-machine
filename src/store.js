import { configureStore } from "@reduxjs/toolkit";
import displayReducer from './features/store/displaySlice'

export default configureStore({
  reducer: {
    display: displayReducer,
  },
})
