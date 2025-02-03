import { useQuery } from '@tanstack/react-query';
import { productsClient } from 'apis/productsClient';
import {
  CategoryKey,
  CATEGORY_MAP,
  Product,
  CategoryValue,
} from '@constants/category';

export const fetchByCategory = async (
  category: CategoryValue,
  limit?: number
): Promise<Product[]> => {
  const { data } = await productsClient.get(`category/${category}`, {
    params: { limit },
  });
  return data;
};

const useFetchCategory = (category: CategoryKey, limit?: number) => {
  const c = CATEGORY_MAP[category][0];
  return useQuery<Product[]>({
    queryKey: ['category', c, ...(limit ? [limit] : [])],
    queryFn: () => fetchByCategory(c, limit),
    staleTime: 1000 * 60 * 5,
  });
};

export default useFetchCategory;
