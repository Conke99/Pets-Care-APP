import { request } from "../Axios/Request";

export const loginService = (params = null) => {
  return async (dispatch, getState) => {
    return dispatch(
      request("/api/login", getState(), {
        method: "POST",
        params,
      })
    );
  };
};
