import axios from "axios";
import { trackPromise } from "react-promise-tracker";

export const getPosts = async (): Promise<any> => {
  try {
    const res = await trackPromise(
      axios.get("https://dummyjson.com/posts?limit=50")
    );
    return res;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getPostById = async (id: number): Promise<any> => {
  try {
    const res = await trackPromise(
      axios.get(`https://dummyjson.com/posts/${id}`)
    );
    return res;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const postData = async (): Promise<any> => {
  try {
    const res = await trackPromise(
      axios.post("http://localhost:5000/data", {
        name: "",
      })
    );
    return res;
  } catch (e) {
    return Promise.reject(e);
  }
};
