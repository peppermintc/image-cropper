import SideBar from "../../components/SideBar/SideBar";
import Setting from "../../components/Setting/Setting";
import ImageCropper from "../../components/ImageCroppingSection/ImageCroppingSection";
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
