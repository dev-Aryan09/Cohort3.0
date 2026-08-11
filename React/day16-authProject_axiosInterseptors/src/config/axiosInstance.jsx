import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("from interceptors", response);
    return response;
  },
  (error) => {
    console.log("error", error);
  },
);

//request interceptor
// axiosInstance.interceptors.request.use(
//   () => {},
//   () => {},
// );
