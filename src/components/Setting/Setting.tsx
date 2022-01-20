import "./Setting.scss";

const Setting = () => {
  const onApplyCropButtonClick = () => {
    const previewCanvasElement: HTMLCanvasElement | null =
      document.querySelector("#preview-canvas-element");
    if (!previewCanvasElement) return;
    const croppedUrl = previewCanvasElement.toDataURL();
    // console.log();
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
          <button>Download cropped Image</button>
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
    </div>
  );
};

export default Setting;
