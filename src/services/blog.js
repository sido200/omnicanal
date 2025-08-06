import axios from "axios";

axios.defaults.withCredentials = true;
export const BASE_URL = import.meta.env.VITE_API_LINK;



export const getallblogs = () => {
  return axios.get(`${BASE_URL}/blogs?populate=*`);
};
export const getBlogById = (id) => {
  return axios.get(`${BASE_URL}/blogs/${id}?populate=*`);
};
