import "./ImageItem.scss";
import ImageIcon from "../../img/image-icon.png";
import deleteIcon from "../../img/delete-icon.png";
import { bindActionCreators } from "redux";
import * as imageActionCreators from "../../store/actions/imageActionCreators";
import { useDispatch } from "react-redux";

interface Props {
  item: {
    id: number;
    name: string;
    url: string;
    cropped: string | null;
  };
}

const ImageItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const { updateCurrentImage } = bindActionCreators(
    imageActionCreators,
    dispatch
  );

  const onImageItemClicked = () => {
    const newCurrentImage = item;
    updateCurrentImage(newCurrentImage);
  };

  return (
    <div className="image-item-container" onClick={onImageItemClicked}>
      <img className="image-icon" src={ImageIcon} alt="item" />
      <span className="name">{item.name}</span>
      <img className="delete-icon" src={deleteIcon} alt="remove" />
    </div>
  );
};

export default ImageItem;