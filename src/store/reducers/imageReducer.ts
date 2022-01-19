interface actionInterface {
  type: string;
  payload: [];
}

const initialState = {
  currentImage: null,
  imageList: [
    {
      id: 0,
      name: "sample-image-0.jpg",
      url: "https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg",
      cropped: null,
    },
    {
      id: 1,
      name: "sample-image-1.jpg",
      url: "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
      cropped: null,
    },
    {
      id: 2,
      name: "sample-image-2.jpg",
      url: "https://i.pinimg.com/originals/ab/27/d8/ab27d8db9a683e046325631cb80dd4d4.jpg",
      cropped: null,
    },
  ],
};

const imageReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case "UPDATE_CURRENT_IMAGE":
      return {
        ...state,
        currentImage: action.payload,
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
