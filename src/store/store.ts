import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { ImageState } from "../reducers/imageReducer";

export const store = configureStore({
  reducer: rootReducer,
});

export interface RootState {
  image: ImageState;
}
