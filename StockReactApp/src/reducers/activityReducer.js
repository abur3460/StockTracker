import { FETCHING_DATA_SUCCESS } from "../actions";

const initialState = {
  activity: [],
  error: "",
  isFetching: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: true,
        activity: action.payload,
      };
    default:
      return state;
  }
}
