import KoalaImage from "../../img/sample/koala.jpeg";
import BirdImage from "../../img/sample/bird1.jpeg";
import DogImage from "../../img/sample/dog1.jpeg";

export interface Image {
  id: number;
  name: string;
  url: string;
  cropUrl: string | null;
}

export interface ImageState {
  currentImage: Image;
  imageList: Image[];
}

interface Action {
  type: string;
  payload: [];
}

const initialState: ImageState = {
  currentImage: {
    id: 0,
    name: "sample-image-0.jpg",
    url: KoalaImage,
    cropUrl: null,
  },
  imageList: [
    {
      id: 0,
      name: "sample-image-0.jpg",
      url: KoalaImage,
      cropUrl: null,
    },
    {
      id: 1,
      name: "sample-image-1.jpg",
      url: BirdImage,
      cropUrl: null,
    },
    {
      id: 2,
      name: "sample-image-2.jpg",
      url: DogImage,
      cropUrl: null,
    },
  ],
};

const imageReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "UPDATE_CURRENT_IMAGE":
      return {
        ...state,
        currentImage: action.payload,
      };
    case "UPDATE_IMAGE_LIST":
      return {
        ...state,
        imageList: action.payload,
      };
    case "ADD_IMAGE":
      return {
        ...state,
        imageList: action.payload,
      };
    case "REMOVE_IMAGE":
      return {
        ...state,
        imageList: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
