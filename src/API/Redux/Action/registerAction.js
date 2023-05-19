import * as type from "../Type";

import { registerService } from "../../Network/Service/registerService";

export const registerAction = (params = null) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: type.REGISTER_SAVE_REQUEST,
      });
      const response = await dispatch(registerService(params));
      if (response.status === 200) {
        dispatch({
          type: type.REGISTER_SAVE_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: type.REGISTER_SAVE_FAILURE,
        });
      }
    } catch (ex) {
      dispatch({
        type: type.REGISTER_SAVE_FAILURE,
      });
    }
  };
};
