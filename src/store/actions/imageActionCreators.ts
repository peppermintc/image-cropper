import { Dispatch } from "redux";

interface currentImageInterface {
  id: number;
  name: string;
  url: string;
  cropped: string | null;
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
