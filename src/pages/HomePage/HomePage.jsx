import ImageCropper from "../../components/ImageCropper/ImageCropper";
import Setting from "../../components/Setting/Setting";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.scss";

const sampleImageList = [
  {
    id: 0,
    name: "sample-image-0.jpg",
    url: "https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg",
  },
  {
    id: 1,
    name: "sample-image-1.jpg",
    url: "https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg",
  },
  {
    id: 2,
    name: "sample-image-2.jpg",
    url: "https://hs.sbcounty.gov/cn/Photo%20Gallery/Sample%20Picture%20-%20Koala.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="home-container">
      <SideBar sampleImageList={sampleImageList} />
      <ImageCropper />
      <Setting />
    </div>
  );
};

export default HomePage;
