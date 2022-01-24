import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ImageCropper from "../ImageCropper/ImageCropper";
import "./ImageCroppingSection.scss";

const ImageCroppingSection = () => {
  const { currentImage } = useSelector((state: RootState) => state.image);

  return (
    <div className="image-cropper-container">
      <ImageCropper currentImage={currentImage} />
    </div>
  );
};

export default ImageCroppingSection;
