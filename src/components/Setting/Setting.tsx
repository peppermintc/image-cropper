import "./Setting.scss";

const Setting = () => {
  return (
    <div className="setting-container">
      <div className="save-header">Save</div>
      <div className="save-content">
        <div className="save-content-header">Individual Image</div>
        <button>Apply crop</button>
        <button>Download cropped Image</button>
        <button>Download original Image</button>
        <div className="save-content-header">All Images</div>
        <button>Download all cropped Image</button>
      </div>
      <div className="setting-header">Setting</div>
      <div>-</div>
    </div>
  );
};

export default Setting;
