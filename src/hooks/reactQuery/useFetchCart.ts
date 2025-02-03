import { useQueries } from '@tanstack/react-query';
import { fetchById } from './useFetchProduct';

const useFetchCart = (ids: string[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ['product', id],
      queryFn: () => fetchById(id),
      staleTime: 1000 * 60 * 5,
      enabled: ids.length !== 0,
    })),
  });
};

export default useFetchCart;
