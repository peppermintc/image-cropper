import { combineReducers } from "redux";
import imageReducer, { ImageState } from "./imageReducer";

export interface RootState {
  image: ImageState;
}

const rootReducer = combineReducers({
  image: imageReducer,
});

export default rootReducer;
