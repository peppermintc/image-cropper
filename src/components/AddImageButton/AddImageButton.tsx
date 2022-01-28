import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { ImageItem } from "../../reducers/imageReducer";
import { RootState } from "../../store/store";
import { getUniqueId } from "../../utils/createUniqueId";
import "./AddImageButton.scss";

const AddImageButton = () => {
  const { imageList } = useSelector((state: RootState) => state.image);

  const { updateCurrentImage, updateImageList } = useActions();

  const onAddButtonClick = () => {
    const imageUploadInput: HTMLInputElement | null = document.querySelector(
      "#image-upload-input"
    );

    imageUploadInput?.click();
  };

  const onInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    const inputFile = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== "string") return;

      const inputImageUrl: string = reader.result;
      const inputImage: ImageItem = {
        id: getUniqueId(),
        name: inputFile.name,
        url: inputImageUrl,
        cropUrl: null,
      };

      updateCurrentImage(inputImage);

      const newImageList: ImageItem[] = [...imageList, inputImage];

      updateImageList(newImageList);
    };

    reader.readAsDataURL(inputFile);
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
