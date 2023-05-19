import * as type from "../Type";
import { RequestState } from "./RequestState";

const INITIAL_STATE = {
  user: {},
  error: {},
  loading: false,
  requestStatus: RequestState.EMPTY,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.REGISTER_SAVE_REQUEST:
      return {
        ...state,
        error: {},
        user: {},
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
        user: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
