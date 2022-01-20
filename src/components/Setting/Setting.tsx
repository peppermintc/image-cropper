import "./Setting.scss";

const Setting = () => {
  return (
    <div className="setting-container">
      <div className="save-content">
        <div className="save-content-header">Individual Image</div>
        <button>Apply crop</button>
        <div className="input-button-group">
          <input
            className="image-name-input"
            type="text"
            placeholder="Cropped image name"
          />
          <button>Download cropped Image</button>
        </div>
        <div className="input-button-group">
          <input
            className="image-name-input"
            type="text"
            placeholder="Original image name"
          />
          <button>Download original Image</button>
        </div>
        <div className="save-content-header">All Images</div>
        <button>Download all cropped Image</button>
      </div>
    </div>
  );
};

export default Setting;
