import _ from "lodash";
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

    downloadCropImage(currentImage.cropUrl, "NONAME");
  };

  return (
    <div className="setting-container">
      <div className="individual-image-setting">
        <div className="title">Individual Image</div>
        <button className="setting-button" onClick={onApplyCropButtonClick}>
          Apply crop
        </button>
        <div className="input-button-group">
          <input type="text" placeholder="Cropped image name" />
          <button onClick={onDownloadCropButtonClick}>
            Download cropped Image
          </button>
        </div>
        <div className="input-button-group">
          <input type="text" placeholder="Original image name" />
          <button>Download original Image</button>
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
