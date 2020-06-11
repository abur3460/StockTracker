import axios from "axios";
import $ from "jquery";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

var key = process.env.REACT_APP_KEY;

const URL =
  "https://financialmodelingprep.com/api/v3/quotes/nyse?apikey=" + key;

export const fetchActivity = () => (dispatch) => {
  $("body").css("overflow-y", "auto");
  axios
    .get(URL)
    .then((res) => {
      document.getElementById("loading").className =
        "animate__animated animate__fadeIn";
      setTimeout(() => {
        document.getElementById("loading").className =
          "animate__animated animate__fadeOut";
        setTimeout(() => {
          document.getElementById("table").className =
            "animate__animated animate__fadeIn";
          console.log(res.data);
          dispatch({
            type: FETCHING_DATA_SUCCESS,
            payload: res.data,
          });
        }, 200);
      }, 3000);
    })
    .catch((err) => console.log(err));
};

// export const fetchActivity = () => (dispatch) => {
//   axios
//     .get("https://api.coinranking.com/v1/public/coins")
//     .then((res) => {
//       document.getElementById("loading").className =
//         "animate__animated animate__fadeIn";
//       setTimeout(() => {
//         document.getElementById("loading").className =
//           "animate__animated animate__fadeOut";
//         setTimeout(() => {
//           document.getElementById("table").className =
//             "animate__animated animate__fadeIn";
//           console.log(res.data.data.coins);
//           dispatch({
//             type: FETCHING_DATA_SUCCESS,
//             payload: res.data.data.coins,
//           });
//         }, 200);
//       }, 3000);
//     })
//     .catch((err) => console.log(err));
// };
