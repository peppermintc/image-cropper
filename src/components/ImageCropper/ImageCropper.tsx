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

interface ImageSizeInterface {
  width: number;
  height: number;
}

const ImageCropper: React.FC<Props> = ({ currentImage }) => {
  const onImageLoad = () => {
    if (!currentImage) return;

    const getImageSize = (): ImageSizeInterface | undefined => {
      const imageElement: HTMLImageElement | null =
        document.querySelector("#image-element");
      if (!imageElement) return;
      const ImagePositionInfo = imageElement.getBoundingClientRect();
      const width = ImagePositionInfo.width;
      const height = ImagePositionInfo.height;
      return { width, height };
    };

    const setCanvasSize = (newWidth: number, newHeight: number) => {
      const canvasElement: HTMLCanvasElement | null =
        document.querySelector("#canvas-element");
      if (!canvasElement) return;
      canvasElement.width = newWidth;
      canvasElement.height = newHeight;
    };

    const imageSize: ImageSizeInterface | undefined = getImageSize();
    if (!imageSize) return;
    setCanvasSize(imageSize.width, imageSize.height);
  };

  return (
    <React.Fragment>
      {currentImage ? (
        <div className="image-cropper">
          <div className="image-name">{currentImage.name}</div>
          <div className="original-image-container">
            <img
              id="image-element"
              className="original-image"
              src={currentImage.url}
              alt="original"
              onLoad={onImageLoad}
            />
            <canvas id="canvas-element"></canvas>
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
