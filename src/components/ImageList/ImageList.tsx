import _ from "lodash";
import ImageListItem from "../ImageItem/ImageListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import "./ImageList.scss";

const ImageList = () => {
  const { imageList } = useSelector((state: RootState) => state.image);

  return (
    <div className="image-list-container">
      <div className="title">Image List</div>
      <div className="image-list">
        {_.map(imageList, (item, index) => (
          <ImageListItem key={index} item={item} />
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
