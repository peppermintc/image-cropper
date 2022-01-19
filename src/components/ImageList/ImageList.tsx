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
        <div className="total">Total: 0 images</div>
        <div className="cropped">Crop completed: 0 / 0</div>
      </div>
    </div>
  );
};

export default ImageList;
