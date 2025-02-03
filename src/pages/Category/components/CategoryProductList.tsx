import ProductList from '@components/products/ProductList';
import SkeletonProductList from '@components/skeleton/SkeletonProductList';
import { CategoryKey } from '@constants/category';
import useFetch from '@hooks/reactQuery/useFetchMultipleCategories';

const CategoryProductList = ({ category }: { category: CategoryKey }) => {
  const queries = useFetch(category);
  const isLoading = queries.some((q) => q.isLoading);
  const isError = queries.some((q) => q.isError);
  const productsData =
    queries
      .map((q) => q.data)
      .reduce((acc, curr) => acc?.concat(curr || []), []) || [];

  if (isLoading) {
    return (
      <SkeletonProductList category={category} variant="vertical" items={8} />
    );
  }

  if (isError) {
    return <div>something went wrong</div>;
  }

  return (
    <ProductList
      variant="vertical"
      category={category}
      products={productsData}
    />
  );
};

export default CategoryProductList;
