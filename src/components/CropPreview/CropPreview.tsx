import { useEffect, useState } from "react";
import "./CropPreview.scss";

interface Props {
  currentImage: {
    id: number;
    name: string;
    url: string;
    cropped: string | null;
  } | null;
}

const CropPreview: React.FC<Props> = ({ currentImage }) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement>();

  useEffect(() => {
    const newCanvasElement: HTMLCanvasElement | null =
      document.querySelector("#preview-canvas");
    if (!newCanvasElement) return;
    setCanvasElement(newCanvasElement);
    if (!canvasElement) return;
    canvasElement.width = 300;
    canvasElement.height = 300;

    const originalImage = new Image();
    if (!currentImage) return;
    originalImage.src = currentImage.url;
    originalImage.onload = () => {
      const ctx = canvasElement?.getContext("2d");
      ctx?.drawImage(originalImage, 0, 0);
    };
  }, [canvasElement, currentImage]);

  return (
    <div className="cropped-preview">
      <div className="title">Crop preview</div>
      <div className="cropped-image-container">
        <canvas id="preview-canvas"></canvas>
      </div>
    </div>
  );
};

export default CropPreview;
