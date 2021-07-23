import axios from "axios";

export const fetchPopular = () => {
  return async function (dispatch) {
    return await axios
    .get("https://fakestoreapi.com/products", { params: { limit: 15 } })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      data.map((item) => {item.isAdd = false; item.cart_quantity = 1})
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
export const filterBy = (payload, category = '') => {
  return {
    type: 'FILTER_BY',
    payload,
    category,
  }
}
