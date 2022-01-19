import ImageItem from "../ImageItem/ImageItem";
import "./ImageList.scss";

const ImageList = () => {
  return (
    <div className="image-list-container">
      <div className="title">Image List</div>
      <div className="image-list">
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
        <ImageItem />
      </div>
      <div className="status">
        <div className="total">Total: 0 images</div>
        <div className="cropped">Crop completed: 0 / 0</div>
      </div>
    </div>
  );
};

export default ImageList;
