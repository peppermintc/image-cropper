import AddImageButton from "../AddImageButton/AddImageButton";
import ImageList from "../ImageList/ImageList";
import "./SideBar.scss";

interface Props {
  sampleImageList: {
    id: number;
    name: string;
    url: string;
  }[];
}

const SideBar: React.FC<Props> = ({ sampleImageList }) => {
  return (
    <div className="side-bar">
      <ImageList sampleImageList={sampleImageList} />
      <AddImageButton />
    </div>
  );
};

export default SideBar;
