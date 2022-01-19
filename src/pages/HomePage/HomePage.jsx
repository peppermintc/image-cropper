import Setting from "../../components/Setting/Setting";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <SideBar />
      <div>Image Cropper</div>
      <Setting />
    </div>
  );
};

export default HomePage;
