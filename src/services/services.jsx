import axios from "axios";
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    console.log(err);
    return Promise.reject();
  }
);

axios.defaults.baseURL = "http://localhost:3001";
export const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  defaults: axios.defaults,
};
