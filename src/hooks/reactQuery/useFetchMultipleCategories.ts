import { useQueries } from '@tanstack/react-query';
import { fetchByCategory } from './useFetchCategory';
import { CategoryKey, CATEGORY_MAP } from '@constants/category';

const useFetchMultipleCategories = (category: CategoryKey) => {
  const categories = CATEGORY_MAP[category];
  return useQueries({
    queries: categories.map((c) => ({
      queryKey: ['category', c],
      queryFn: () => fetchByCategory(c),
      staleTime: 1000 * 60 * 5,
    })),
  });
};

export default useFetchMultipleCategories;
