import ImageList from "../ImageList/ImageList";
import AddImageButton from "../AddImageButton/AddImageButton";
import ResetImageListButton from "../ResetImageListButton/ResetImageListButton";
import "./SideBar.scss";

const SideBar: React.FC = () => {
  return (
    <div className="side-bar">
      <ImageList />
      <AddImageButton />
      <ResetImageListButton />
    </div>
  );
};

export default SideBar;
