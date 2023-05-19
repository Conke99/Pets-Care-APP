import * as type from "../Type";
import { loginService } from "../../Network/Service/loginService";

export const loginAction = (params = null) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: type.LOGIN_FETCH_REQUEST,
      });
      const response = await dispatch(loginService(params));
      if (response.status === 200) {
        dispatch({
          type: type.LOGIN_FETCH_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: type.LOGIN_FETCH_FAILURE,
        });
      }
    } catch (ex) {
      dispatch({
        type: type.LOGIN_FETCH_FAILURE,
      });
    }
  };
};
