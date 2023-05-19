import * as type from "../Type";
import { RequestState } from "./RequestState";

const INITIAL_STATE = {
  user: {},
  oneAll: {},
  error: {},
  loading: false,
  requestStatus: RequestState.EMPTY,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOGIN_FETCH_REQUEST:
      return {
        ...state,
        error: {},
        user: {},
        loading: true,
      };
    case type.LOGIN_FETCH_SUCCESS:
      return {
        ...state,
        error: {},
        user: action.payload,
        loading: false,
      };
    case type.LOGIN_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        user: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
