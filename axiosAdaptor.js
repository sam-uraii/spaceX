import axios from "axios";
import { Alert } from "react-native";
import { ERROR_400, ERROR_500, NETWORK_ERROR } from "./Constants/APIConstants";
const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
});

api.interceptors.response.use(
  (response) => {
    isNetworkAvailable = true;
    return response;
  },
  (error) => {
    console.log(error.message, error.code);

    if (error.message === ERROR_400) {
      Alert.alert("City Does not exists");
      console.log("wrong parameters sent");
    } else if (error.message === ERROR_500) {
      Alert.alert(
        "Server is under maintenance, Please try again after some time"
      );
    } else {
      if (error.message === NETWORK_ERROR) {
        Alert.alert("Please connect to Internet");
      } else {
        Alert.alert("Something went wrong");
      }
    }
  }
);

export default api;
