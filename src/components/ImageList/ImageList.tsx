import _ from "lodash";
import ImageItem from "../ImageItem/ImageItem";
import { RootStateOrAny, useSelector } from "react-redux";
import "./ImageList.scss";

const ImageList: React.FC = () => {
  const { imageList } = useSelector((state: RootStateOrAny) => state.image);

  return (
    <div className="image-list-container">
      <div className="title">Image List</div>
      <div className="image-list">
        {_.map(imageList, (item, index) => (
          <ImageItem key={index} item={item} />
        ))}
      </div>
      <div className="status">
        <div className="total">Total: {imageList.length} images</div>
        <div className="cropped">Crop completed: 0 / {imageList.length}</div>
      </div>
    </div>
  );
};

export default ImageList;
