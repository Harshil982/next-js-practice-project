import axios from "axios";
import { trackPromise } from "react-promise-tracker";

export const getProducts = async (): Promise<any> => {
  try {
    const res = await trackPromise(axios.get("https://dummyjson.com/products"));
    return res;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getProductById = async (id: number): Promise<any> => {
  try {
    const res = await trackPromise(
      axios.get(`https://dummyjson.com/products/${id}`)
    );
    return res;
  } catch (e) {
    return Promise.reject(e);
  }
};
