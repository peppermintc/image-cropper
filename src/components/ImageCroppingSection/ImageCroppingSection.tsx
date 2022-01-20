import { RootStateOrAny, useSelector } from "react-redux";
import CropPreview from "../CropPreview/CropPreview";
import ImageCropper from "../ImageCropper/ImageCropper";
import "./ImageCroppingSection.scss";

const ImageCroppingSection = () => {
  const { currentImage } = useSelector((state: RootStateOrAny) => state.image);

  return (
    <div className="image-cropper-container">
      <ImageCropper currentImage={currentImage} />
      <CropPreview currentImage={currentImage} />
    </div>
  );
};

export default ImageCroppingSection;
