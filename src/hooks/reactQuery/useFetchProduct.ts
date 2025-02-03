import { useQuery } from '@tanstack/react-query';
import { productsClient } from 'apis/productsClient';
import { Product } from '@constants/category';

export const fetchById = async (id: string): Promise<Product> => {
  const { data } = await productsClient.get(id);
  return data;
};

const useFetchProduct = (id: string) => {
  return useQuery<Product>({
    queryKey: ['product', id],
    queryFn: () => fetchById(id),
    staleTime: 1000 * 60 * 5,
  });
};

export default useFetchProduct;
