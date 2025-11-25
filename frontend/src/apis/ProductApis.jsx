import { axiosInstance } from "../config/axiosInstance";


// src/apis/ProductApis.jsx
export const getProductByCategory = async (category) => {
  // ...normalization code kept the same...
  try {
    
    const res = await axiosInstance.get(path, { timeout: 10000 });
    const data = res?.data ?? {};
    const productsData = Array.isArray(data.productsData)
      ? data.productsData
      : Array.isArray(data)
      ? data
      : Array.isArray(data.products)
      ? data.products
      : [];
    return { productsData, raw: data }; 
  } catch (error) {
    // log useful debug info
    console.error("[getProductByCategory] error fetching products for:", category, {
      message: error.message,
      code: error.code,
      status: error?.response?.status,
    });

    // RETHROW so react-query sees the error and can manage retries / isError
    throw error;
  }
};
