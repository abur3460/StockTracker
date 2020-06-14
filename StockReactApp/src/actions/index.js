import axios from "axios";
import $ from "jquery";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
var key = process.env.REACT_APP_KEY;

const URL =
  "https://financialmodelingprep.com/api/v3/quotes/nyse?apikey=" + key;

export const fetchActivity = () => (dispatch) => {
  $("body").css("overflow-y", "auto");
  axios
    .get(URL)
    .then((res) => {
      dispatch({
        type: FETCHING_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchUserData = () => (dispatch) => {};
