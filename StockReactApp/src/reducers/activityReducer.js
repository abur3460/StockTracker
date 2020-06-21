import { FETCHING_DATA_SUCCESS } from "../actions/types";

const initialState = {
  indexes: [],
  error: "",
  isFetching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: true,
        indexes: action.payload,
      };
    default:
      return state;
  }
}
