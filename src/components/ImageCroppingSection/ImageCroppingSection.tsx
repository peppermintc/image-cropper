import { RootStateOrAny, useSelector } from "react-redux";
import "./ImageCroppingSection.scss";

const ImageCroppingSection = () => {
  const { currentImage } = useSelector((state: RootStateOrAny) => state.image);

  return (
    <div className="image-cropper-container">
      {currentImage ? (
        <div className="image-cropper">
          <div className="image-name">{currentImage.name}</div>
          <div className="original-image-container">
            <img
              className="original-image"
              src={currentImage.url}
              alt="original"
            />
          </div>
        </div>
      ) : (
        <div className="no-image">
          <div className="header">No image selected</div>
          <div className="description">
            Please select an image from the image list
          </div>
        </div>
      )}
      <div className="cropped-preview">
        <div className="title">Crop preview</div>
        <div className="cropped-image-container"></div>
      </div>
    </div>
  );
};

export default ImageCroppingSection;
