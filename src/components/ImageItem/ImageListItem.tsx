import _ from "lodash";
import { useSelector } from "react-redux";
import { MouseEvent } from "react";
import { RootState } from "../../store/store";
import { ImageItem } from "../../reducers/imageReducer";
import { useActions } from "../../hooks/useActions";
import ImageIcon from "../../img/image-icon.png";
import deleteIcon from "../../img/delete-icon.png";
import "./ImageListItem.scss";

interface Props {
  item: ImageItem;
}

const ImageListItem = ({ item }: Props) => {
  const { imageList, currentImage } = useSelector(
    (state: RootState) => state.image
  );

  const { updateCurrentImage, updateImageList } = useActions();

  const onImageItemClicked = () => {
    const newCurrentImage = item;
    updateCurrentImage(newCurrentImage);
  };

  const onDeleteClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (currentImage !== undefined && currentImage.id === item.id) {
      updateCurrentImage();
    }

    const newImageList: ImageItem[] = _.filter(
      imageList,
      (image) => image.id !== item.id
    );
    updateImageList(newImageList);
  };

  return (
    <div className="image-item-container" onClick={onImageItemClicked}>
      <img className="image-icon" src={ImageIcon} alt="item" />
      <span className="name">{item.name}</span>
      <img
        className="delete-icon"
        src={deleteIcon}
        alt="remove"
        onClick={onDeleteClick}
      />
    </div>
  );
};

export default ImageListItem;
