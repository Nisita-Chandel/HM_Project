// src/hooks/ladiesHook.jsx
import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "../apis/ProductApis";

/**
 * fetchProductDataHook - Custom hook for fetching ladies products
 * @param {string} category - The product category (e.g., "ladies")
 * @returns {object} - React Query result { data, isLoading, isError, ... }
 */
const fetchProductDataHook = (category) => {
  
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const result = await getProductByCategory(category);
      return result;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 3,
  });
};

export default fetchProductDataHook;