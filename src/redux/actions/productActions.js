import axios from "axios";

export const fetchPopular = () => {
  return async function (dispatch) {
    return await axios
    .get("https://fakestoreapi.com/products", { params: { limit: 15 } })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      dispatch({
        type: "FETCH_POPULAR",
        payload: data
      });
    })
    .catch((error) => {
      throw error;
    });
  }
};
