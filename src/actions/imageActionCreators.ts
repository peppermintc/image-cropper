import { ImageItem } from "../reducers/imageReducer";
import { createAction } from "@reduxjs/toolkit";

export const updateCurrentImage = createAction<ImageItem>(
  "UPDATE_CURRENT_IMAGE"
);

export const updateImageList = createAction<ImageItem[]>("UPDATE_IMAGE_LIST");
