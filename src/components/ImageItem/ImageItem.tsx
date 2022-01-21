import _ from "lodash";
import "./ImageItem.scss";
import ImageIcon from "../../img/image-icon.png";
import deleteIcon from "../../img/delete-icon.png";
import { bindActionCreators } from "redux";
import * as imageActionCreators from "../../store/actions/imageActionCreators";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

interface Props {
  item: {
    id: number;
    name: string;
    url: string;
    cropUrl: string | null;
  };
}

const ImageItem: React.FC<Props> = ({ item }) => {
  const { imageList } = useSelector((state: RootStateOrAny) => state.image);

  const dispatch = useDispatch();
  const { updateCurrentImage, updateImageList } = bindActionCreators(
    imageActionCreators,
    dispatch
  );

  const onImageItemClicked = () => {
    const newCurrentImage = item;
    updateCurrentImage(newCurrentImage);
  };

  const onDeleteClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    const newImageList: any = _.filter(
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

export default ImageItem;
