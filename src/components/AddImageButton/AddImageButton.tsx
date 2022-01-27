import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as imageActionCreators from "../../actions/imageActionCreators";
import { bindActionCreators } from "redux";
import { ImageItem } from "../../reducers/imageReducer";
import { RootState } from "../../store/store";
import { getUniqueId } from "../../utils/createUniqueId";
import "./AddImageButton.scss";

const AddImageButton = () => {
  const { imageList } = useSelector((state: RootState) => state.image);

  const dispatch = useDispatch();
  const { updateCurrentImage, updateImageList } = bindActionCreators(
    imageActionCreators,
    dispatch
  );

  const onAddButtonClick = () => {
    const imageUploadInput: HTMLInputElement | null = document.querySelector(
      "#image-upload-input"
    );

    imageUploadInput?.click();
  };

  const onInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== "string") return;

      const inputImageUrl: string = reader.result;
      const inputImage: ImageItem = {
        id: getUniqueId(),
        name: "new image name",
        url: inputImageUrl,
        cropUrl: null,
      };

      updateCurrentImage(inputImage);

      const newImageList: ImageItem[] = [...imageList, inputImage];

      updateImageList(newImageList);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <button className="add-image-button" onClick={onAddButtonClick}>
        Add image
      </button>
      <input
        type="file"
        id="image-upload-input"
        accept="image/*"
        onChange={onInputFileChange}
      />
    </>
  );
};

export default AddImageButton;
