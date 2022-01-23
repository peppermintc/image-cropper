import { Dispatch } from "redux";
import { ImageItem } from "../reducers/imageReducer";

// Action creators
export const updateCurrentImage = (newCurrentImage: ImageItem) => {
  return async (dispatch: Dispatch) => {
    await dispatch({
      type: "UPDATE_CURRENT_IMAGE",
      payload: newCurrentImage,
    });
  };
};

export const updateImageList = (newImageList: ImageItem[]) => {
  return async (dispatch: Dispatch) => {
    await dispatch({
      type: "UPDATE_IMAGE_LIST",
      payload: newImageList,
    });
  };
};
