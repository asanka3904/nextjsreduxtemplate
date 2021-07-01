import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../slice/testSlice";

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
