import "./ImageItem.scss";
import ImageIcon from "../../img/image-icon.png";
import deleteIcon from "../../img/delete-icon.png";

interface Props {
  item: {
    id: Number;
    name: String;
    url: String;
  };
}

const ImageItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="image-item-container">
      <img className="image-icon" src={ImageIcon} alt="item" />
      <span className="name">{item.name}</span>
      <img className="delete-icon" src={deleteIcon} alt="remove" />
    </div>
  );
};

export default ImageItem;
