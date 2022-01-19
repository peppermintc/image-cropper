import { Dispatch } from "redux";

interface currentImageInterface {
  id: Number;
  name: String;
  url: String;
  cropped: String | null;
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
