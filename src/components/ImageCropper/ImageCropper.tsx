import React from "react";
import "./ImageCropper.scss";

interface Props {
  currentImage: {
    id: number;
    name: string;
    url: string;
    cropped: string | null;
  } | null;
}

const ImageCropper: React.FC<Props> = ({ currentImage }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ImageCropper;
