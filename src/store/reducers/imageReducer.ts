interface actionInterface {
  type: string;
  payload: [];
}

const initialState = {
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
      url: "https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg",
      cropped: null,
    },
    {
      id: 2,
      name: "sample-image-2.jpg",
      url: "https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg",
      cropped: null,
    },
  ],
};

const imageReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
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
