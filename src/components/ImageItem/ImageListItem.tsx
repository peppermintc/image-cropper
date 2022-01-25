import _ from "lodash";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import * as imageActionCreators from "../../actions/imageActionCreators";
import { MouseEvent } from "react";
import { RootState } from "../../store/store";
import { ImageItem } from "../../reducers/imageReducer";
import ImageIcon from "../../img/image-icon.png";
import deleteIcon from "../../img/delete-icon.png";
import "./ImageListItem.scss";

interface Props {
  item: ImageItem;
}

const ImageListItem = ({ item }: Props) => {
  const { imageList } = useSelector((state: RootState) => state.image);

  const dispatch = useDispatch();
  const { updateCurrentImage, updateImageList } = bindActionCreators(
    imageActionCreators,
    dispatch
  );

  const onImageItemClicked = () => {
    const newCurrentImage = item;
    updateCurrentImage(newCurrentImage);
  };

  const onDeleteClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();

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
