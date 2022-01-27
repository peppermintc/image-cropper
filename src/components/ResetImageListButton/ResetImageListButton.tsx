import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActionCreators from "../../actions/imageActionCreators";
import "./ResetImageListButton.scss";

const ResetImageListButton = () => {
  const dispatch = useDispatch();
  const { resetImageList, updateCurrentImage } = bindActionCreators(
    imageActionCreators,
    dispatch
  );

  const onResetButtonClick = () => {
    resetImageList();
    updateCurrentImage();
  };

  return (
    <button className="reset-image-list-button" onClick={onResetButtonClick}>
      Reset Image List
    </button>
  );
};

export default ResetImageListButton;
