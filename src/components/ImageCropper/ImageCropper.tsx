/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, MouseEvent } from "react";
import ImageIcon from "../../img/image-icon.png";
import { ImageItem } from "../../store/reducers/imageReducer";
import "./ImageCropper.scss";

interface Props {
  currentImage: ImageItem;
}

interface ImageSize {
  width: number;
  height: number;
}

const ImageCropper = ({ currentImage }: Props) => {
  const [isCropping, setIsCropping] = useState(false);
  const [locA, setLocA] = useState<{ x: number; y: number }>();
  const [locB, setLocB] = useState<{ x: number; y: number }>();
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvasElement: HTMLCanvasElement | null =
      document.querySelector("#canvas-element");
    if (!canvasElement) return;
    const newCtx = canvasElement.getContext("2d");
    setCtx(newCtx);
  }, [currentImage]);

  useEffect(() => {
    if (!locA || !locB) return;
    if (!ctx) return;

    const canvasElement: HTMLCanvasElement | null =
      document.querySelector("#canvas-element");
    if (!canvasElement) return;

    const drawRect = ({
      x,
      y,
      w,
      h,
    }: {
      x: number;
      y: number;
      w: number;
      h: number;
    }) => {
      ctx.strokeStyle = "#7fe7dc";
      ctx.lineWidth = 2;
      ctx.rect(x, y, w, h);
      ctx.stroke();
    };

    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    ctx.beginPath();

    drawRect({ x: locA.x, y: locA.y, w: locB.x - locA.x, h: locB.y - locA.y });
  }, [locB, ctx]);

  useEffect(() => {
    const originalCanvasElement: HTMLCanvasElement | null =
      document.querySelector("#canvas-element");
    if (!originalCanvasElement) return;

    const previewImageElement = new Image(
      originalCanvasElement.width,
      originalCanvasElement.height
    );
    if (!currentImage) return;
    previewImageElement.src = currentImage.url;
    previewImageElement.onload = () => {
      const previewCanvasElement: HTMLCanvasElement | null =
        document.querySelector("#preview-canvas-element");
      if (!previewCanvasElement) return;
      const previewCtx = previewCanvasElement?.getContext("2d");
      if (!locA || !locB) return;
      previewCanvasElement.width = locB.x - locA.x;
      previewCanvasElement.height = locB.y - locA.y;
      previewCtx?.drawImage(
        previewImageElement,
        -locA.x,
        -locA.y,
        originalCanvasElement.width,
        originalCanvasElement.height
      );
    };
  }, [currentImage, locB]);

  const onImageLoad = () => {
    if (!currentImage) return;

    const getImageSize = (): ImageSize | undefined => {
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

    const imageSize: ImageSize | undefined = getImageSize();
    if (!imageSize) return;
    setCanvasSize(imageSize.width, imageSize.height);
  };

  const onCanvasMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
    setIsCropping(true);
    setLocA(getMousePosition(e));
  };

  const onCanvasMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isCropping) return;
    setLocB(getMousePosition(e));
  };

  const onCanvasMouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
    setIsCropping(false);
  };

  const onCanvasMouseLeave = () => {
    setIsCropping(false);
  };

  const getMousePosition = (e: MouseEvent<HTMLCanvasElement>) => {
    const canvasElement: HTMLCanvasElement | null =
      document.querySelector("#canvas-element");
    if (!canvasElement) return;
    const canvasPositionInfo = canvasElement.getBoundingClientRect();
    return {
      x: e.clientX - canvasPositionInfo.left,
      y: e.clientY - canvasPositionInfo.top,
    };
  };

  return (
    <>
      {currentImage && (
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
            <canvas
              id="canvas-element"
              width="0"
              height="0"
              onMouseDown={onCanvasMouseDown}
              onMouseMove={onCanvasMouseMove}
              onMouseUp={onCanvasMouseUp}
              onMouseLeave={onCanvasMouseLeave}
            ></canvas>
          </div>
        </div>
      )}

      {!currentImage && (
        <div className="no-image">
          <div className="header">No image selected</div>
          <div className="description">
            <img className="image-icon" src={ImageIcon} alt="item" />
            <div>Please select an image from the image list</div>
          </div>
        </div>
      )}

      <div className="cropped-preview">
        <div className="title">Crop preview</div>
        <div className="cropped-image-container">
          <canvas id="preview-canvas-element" width="0" height="0"></canvas>
        </div>
      </div>
    </>
  );
};

export default ImageCropper;
