import { useActions } from "../../hooks/useActions";
import "./ResetImageListButton.scss";

const ResetImageListButton = () => {
  const { resetImageList, updateCurrentImage } = useActions();

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
