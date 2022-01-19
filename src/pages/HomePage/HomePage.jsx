import ImageCropper from "../../components/ImageCroppingSection/ImageCroppingSection";
import Setting from "../../components/Setting/Setting";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <SideBar />
      <ImageCropper />
      <Setting />
    </div>
  );
};

export default HomePage;
