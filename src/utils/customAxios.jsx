import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:10000/api/v1",
});

export default customAxios;
