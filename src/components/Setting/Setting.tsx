import "./Setting.scss";

const Setting = () => {
  const onApplyCropButtonClick = () => {
    const previewCanvasElement: HTMLCanvasElement | null =
      document.querySelector("#preview-canvas-element");
    const downloadLink: HTMLElement | null =
      document.getElementById("download-link");
    if (!previewCanvasElement || !downloadLink) return;
    const croppedUrl = previewCanvasElement.toDataURL();
    downloadLink.setAttribute("download", "no-name-image");
    downloadLink.setAttribute("href", croppedUrl);
    downloadLink.click();
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
