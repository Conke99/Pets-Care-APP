import * as type from "../Type";
import { RequestState } from "./RequestState";

const INITIAL_STATE = {
  user: null,
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
        user: null,
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
        user: null,
        loading: false,
      };
    case type.REGISTER_SAVE_REQUEST:
      return {
        ...state,
        error: {},
        user: null,
        loading: true,
      };
    case type.REGISTER_SAVE_SUCCESS:
      return {
        ...state,
        error: {},
        user: action.payload,
        loading: false,
      };
    case type.REGISTER_SAVE_FAILURE:
      return {
        ...state,
        error: action.payload,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
