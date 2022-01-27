import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as imageActionCreators from "../actions/imageActionCreators";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(imageActionCreators, dispatch);
};
