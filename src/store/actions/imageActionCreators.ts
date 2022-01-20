import { Dispatch } from "redux";

interface currentImageInterface {
  id: number;
  name: string;
  url: string;
  cropUrl: string | null;
}

// Action creators
export const updateCurrentImage = (newCurrentImage: currentImageInterface) => {
  return async (dispatch: Dispatch) => {
    await dispatch({
      type: "UPDATE_CURRENT_IMAGE",
      payload: newCurrentImage,
    });
  };
};

export const updateImageList = (newImageList: []) => {
  return async (dispatch: Dispatch) => {
    await dispatch({
      type: "UPDATE_IMAGE_LIST",
      payload: newImageList,
    });
  };
};
