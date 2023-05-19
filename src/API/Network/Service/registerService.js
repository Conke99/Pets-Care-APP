import { request } from "../Axios/Request";

export const registerService = (params = null) => {
  return async (dispatch, getState) => {
    return dispatch(
      request("api/register", getState(), {
        method: "POST",
        params,
      })
    );
  };
};
