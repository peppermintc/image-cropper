import "./ImageItem.scss";
import ImageIcon from "../../img/image-icon.png";
import deleteIcon from "../../img/delete-icon.png";

const ImageItem = () => {
  return (
    <div className="image-item-container">
      <img className="image-icon" src={ImageIcon} alt="item" />
      <span className="name">Image name</span>
      <img className="delete-icon" src={deleteIcon} alt="remove" />
    </div>
  );
};

export default ImageItem;
