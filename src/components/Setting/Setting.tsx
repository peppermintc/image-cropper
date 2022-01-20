import _ from "lodash";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActionCreators from "../../store/actions/imageActionCreators";
import "./Setting.scss";

const Setting = () => {
  const { currentImage, imageList } = useSelector(
    (state: RootStateOrAny) => state.image
  );

  const dispatch = useDispatch();
  const { updateCurrentImage, updateImageList } = bindActionCreators(
    imageActionCreators,
    dispatch
  );

  useEffect(() => {
    if (!currentImage) return;

    if (currentImage.cropUrl) activateDownloadCropButton();
    else deactivateDownloadCropButton();
  }, [currentImage]);

  const onApplyCropButtonClick = () => {
    const getCropUrl = () => {
      const previewCanvasElement: HTMLCanvasElement | null =
        document.querySelector("#preview-canvas-element");
      if (!previewCanvasElement) return;
      return previewCanvasElement.toDataURL();
    };

    const newCropUrl = getCropUrl();

    const newCurrentImage = {
      ...currentImage,
      cropUrl: newCropUrl,
    };

    updateCurrentImage(newCurrentImage);

    const newImageList: any = _.map(imageList, (image) => {
      if (image.id !== newCurrentImage.id) return image;
      return newCurrentImage;
    });

    updateImageList(newImageList);
  };

  const onDownloadCropButtonClick = () => {
    const downloadCropImage = (cropUrl: string, imageName: string) => {
      const downloadLink: HTMLElement | null =
        document.getElementById("download-link");
      if (!downloadLink) return;
      downloadLink.setAttribute("download", imageName);
      downloadLink.setAttribute("href", cropUrl);
      downloadLink.click();
    };

    const inputElement: HTMLInputElement | null = document.querySelector(
      "#crop-image-name-input"
    );
    if (!inputElement) return;
    const newName = inputElement.value;

    downloadCropImage(currentImage.cropUrl, newName);
  };

  const onDownloadOriginalButtonClick = () => {
    const downloadOriginalImage = (url: string, imageName: string) => {
      const downloadLink: HTMLElement | null =
        document.getElementById("download-link");
      if (!downloadLink) return;
      downloadLink.setAttribute("download", imageName);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    };

    const inputElement: HTMLInputElement | null = document.querySelector(
      "#original-image-name-input"
    );
    if (!inputElement) return;
    const newName = inputElement.value;

    downloadOriginalImage(currentImage.url, newName);
  };

  const activateDownloadCropButton = () => {
    const downloadCropButton: HTMLButtonElement | null = document.querySelector(
      ".download-crop-button"
    );
    if (!downloadCropButton) return;
    downloadCropButton.disabled = false;
  };

  const deactivateDownloadCropButton = () => {
    const downloadCropButton: HTMLButtonElement | null = document.querySelector(
      ".download-crop-button"
    );
    if (!downloadCropButton) return;
    downloadCropButton.disabled = true;
  };

  return (
    <div className="setting-container">
      <div className="individual-image-setting">
        <div className="title">Individual Image</div>
        <button className="setting-button" onClick={onApplyCropButtonClick}>
          Apply crop
        </button>
        <div className="input-button-group">
          <input
            id="crop-image-name-input"
            type="text"
            placeholder="Cropped image name"
          />
          <button
            className="download-crop-button"
            onClick={onDownloadCropButtonClick}
          >
            Download cropped Image
          </button>
        </div>
        <div className="input-button-group">
          <input
            id="original-image-name-input"
            type="text"
            placeholder="Original image name"
          />
          <button onClick={onDownloadOriginalButtonClick}>
            Download original Image
          </button>
        </div>
      </div>

      <div className="all-image-setting">
        <div className="title">All Images</div>
        <button className="setting-button">Download all cropped Image</button>
      </div>

      <div className="keyboard-shortcuts-container">
        <div className="title">Keybord shortcuts</div>
      </div>

      <a
        id="download-link"
        style={{ display: "none" }}
        href={process.env.PUBLIC_URL}
      >
        hidden download link
      </a>
    </div>
  );
};

export default Setting;
