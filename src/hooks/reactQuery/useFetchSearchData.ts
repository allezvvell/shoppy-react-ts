import { useQuery } from '@tanstack/react-query';
import { productsClient } from 'apis/productsClient';
import { Product } from '@constants/category';

const fetchSearchData = async () => {
  const { data } = await productsClient.get<Product[]>('');
  return data.map(({ id, title }) => ({ title, id }));
};

const useFetchSearchData = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchSearchData,
    staleTime: 1000 * 60 * 5,
  });
};

export default useFetchSearchData;
