import { Dispatch } from "redux";
import { Image } from "../reducers/imageReducer";

// Action creators
export const updateCurrentImage = (newCurrentImage: Image) => {
  return async (dispatch: Dispatch) => {
    await dispatch({
      type: "UPDATE_CURRENT_IMAGE",
      payload: newCurrentImage,
    });
  };
};

export const updateImageList = (newImageList: Image[]) => {
  return async (dispatch: Dispatch) => {
    await dispatch({
      type: "UPDATE_IMAGE_LIST",
      payload: newImageList,
    });
  };
};
