import axios from "axios";

export const fetchData = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};

export const fetchApiData = () => {
  return (dispatch) => {
    return axios
      .get("https://admin.naxa.com.np/api/services")
      .then((response) => {
        dispatch(fetchData(response.data));
        console.log("Hello");
      })
      .catch((error) => {
        throw error;
      });
  };
};
