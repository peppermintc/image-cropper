import _ from "lodash";
import ImageItem from "../ImageItem/ImageItem";
import "./ImageList.scss";

interface Props {
  sampleImageList: {
    id: number;
    name: string;
    url: string;
  }[];
}

const ImageList: React.FC<Props> = ({ sampleImageList }) => {
  return (
    <div className="image-list-container">
      <div className="title">Image List</div>
      <div className="image-list">
        {_.map(sampleImageList, (item) => (
          <ImageItem item={item} />
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
