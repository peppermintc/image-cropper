import AddImageButton from "../AddImageButton/AddImageButton";
import ImageList from "../ImageList/ImageList";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="side-bar">
      <ImageList />
      <AddImageButton />
    </div>
  );
};

export default SideBar;
